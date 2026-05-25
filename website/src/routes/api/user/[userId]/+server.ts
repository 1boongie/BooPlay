import { error, json } from '@sveltejs/kit';
import { and, count, desc, eq, gte, sql } from 'drizzle-orm';
import { auth } from '$lib/auth';
import { db } from '$lib/server/db';
import { coin, profileReaction, transaction, user, userPortfolio } from '$lib/server/db/schema';
import { getFollowSummary } from '$lib/server/follows';

async function getFeedbackSummary(targetUserId: number, sessionUserId?: number) {
	const [reactionStats] = await db
		.select({
			likesCount: sql<number>`COALESCE(SUM(CASE WHEN ${profileReaction.reaction} = 'LIKE' THEN 1 ELSE 0 END), 0)`,
			dislikesCount: sql<number>`COALESCE(SUM(CASE WHEN ${profileReaction.reaction} = 'DISLIKE' THEN 1 ELSE 0 END), 0)`
		})
		.from(profileReaction)
		.where(eq(profileReaction.targetUserId, targetUserId));

	let userReaction: 'LIKE' | 'DISLIKE' | null = null;

	if (sessionUserId) {
		const [existingReaction] = await db
			.select({ reaction: profileReaction.reaction })
			.from(profileReaction)
			.where(
				and(
					eq(profileReaction.targetUserId, targetUserId),
					eq(profileReaction.reactorUserId, sessionUserId)
				)
			)
			.limit(1);

		userReaction = existingReaction?.reaction ?? null;
	}

	return {
		likesCount: Number(reactionStats?.likesCount ?? 0),
		dislikesCount: Number(reactionStats?.dislikesCount ?? 0),
		userReaction
	};
}

export async function GET({ params, request }) {
	const { userId } = params;
	const session = await auth.api.getSession({
		headers: request.headers
	});

	if (!userId) {
		throw error(400, 'User ID or username is required');
	}

	try {
		const isNumeric = /^\d+$/.test(userId);

		const userProfile = await db.query.user.findFirst({
			where: isNumeric ? eq(user.id, parseInt(userId)) : eq(user.username, userId),
			columns: {
				id: true,
				name: true,
				username: true,
				bio: true,
				image: true,
				createdAt: true,
				baseCurrencyBalance: true,
				loginStreak: true,
				prestigeLevel: true,
				arcadeWins: true,
				arcadeLosses: true,
				nameColor: true,
				timezone: true,
				flags: true
			}
		});

		if (!userProfile) {
			throw error(404, 'User not found');
		}

		const actualUserId = userProfile.id;

		// get created coins
		const createdCoins = await db
			.select({
				id: coin.id,
				name: coin.name,
				symbol: coin.symbol,
				icon: coin.icon,
				currentPrice: coin.currentPrice,
				marketCap: coin.marketCap,
				volume24h: coin.volume24h,
				change24h: coin.change24h,
				createdAt: coin.createdAt
			})
			.from(coin)
			.where(eq(coin.creatorId, actualUserId))
			.orderBy(desc(coin.createdAt))
			.limit(10);

		// get portfolio value and holdings count
		const portfolioHoldings = await db
			.select({
				quantity: userPortfolio.quantity,
				currentPrice: coin.currentPrice,
				poolBaseCurrencyAmount: coin.poolBaseCurrencyAmount,
				poolCoinAmount: coin.poolCoinAmount
			})
			.from(userPortfolio)
			.innerJoin(coin, eq(userPortfolio.coinId, coin.id))
			.where(eq(userPortfolio.userId, actualUserId));

		const holdingsValue = portfolioHoldings.reduce((total, holding) => {
			const quantity = Number(holding.quantity);
			const baseCurrency = Number(holding.poolBaseCurrencyAmount);
			const coinAmount = Number(holding.poolCoinAmount);

			var k = baseCurrency * coinAmount;
			var newCoinAmount = coinAmount + quantity;
			var newBaseCurrency = k / newCoinAmount;
			var value = baseCurrency - newBaseCurrency;
			return total + value;
		}, 0);

		const portfolioStats = {
			holdingsCount: portfolioHoldings.length,
			totalValue: holdingsValue
		};

		const recentTransactions = await db
			.select({
				id: transaction.id,
				type: transaction.type,
				coinSymbol: coin.symbol,
				coinName: coin.name,
				coinIcon: coin.icon,
				quantity: transaction.quantity,
				pricePerCoin: transaction.pricePerCoin,
				totalBaseCurrencyAmount: transaction.totalBaseCurrencyAmount,
				timestamp: transaction.timestamp,
				senderUsername: sql<string>`(SELECT username FROM ${user} WHERE id = ${transaction.senderUserId})`,
				recipientUsername: sql<string>`(SELECT username FROM ${user} WHERE id = ${transaction.recipientUserId})`,
				senderUserId: transaction.senderUserId,
				recipientUserId: transaction.recipientUserId,
				note: transaction.note
			})
			.from(transaction)
			.innerJoin(coin, eq(transaction.coinId, coin.id))
			.where(eq(transaction.userId, actualUserId))
			.orderBy(desc(transaction.timestamp))
			.limit(10);

		const baseCurrencyBalance = parseFloat(userProfile.baseCurrencyBalance);
		const calculatedHoldingsValue = portfolioStats.totalValue || 0;
		const totalPortfolioValue = baseCurrencyBalance + calculatedHoldingsValue;

		// get all transaction statistics
		const transactionStats = await db
			.select({
				totalTransactions: count(),
				totalBuyVolume: sql<number>`COALESCE(SUM(CASE WHEN ${transaction.type} = 'BUY' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`,
				totalSellVolume: sql<number>`COALESCE(SUM(CASE WHEN ${transaction.type} = 'SELL' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`
			})
			.from(transaction)
			.where(eq(transaction.userId, actualUserId));

		const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
		const transactionStats24h = await db
			.select({
				transactions24h: count(),
				buyVolume24h: sql<number>`COALESCE(SUM(CASE WHEN ${transaction.type} = 'BUY' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`,
				sellVolume24h: sql<number>`COALESCE(SUM(CASE WHEN ${transaction.type} = 'SELL' THEN CAST(${transaction.totalBaseCurrencyAmount} AS NUMERIC) ELSE 0 END), 0)`
			})
			.from(transaction)
			.where(
				and(eq(transaction.userId, actualUserId), gte(transaction.timestamp, twentyFourHoursAgo))
			);

		const feedback = await getFeedbackSummary(
			actualUserId,
			session?.user ? Number(session.user.id) : undefined
		);
		const follow = await getFollowSummary(
			actualUserId,
			session?.user ? Number(session.user.id) : undefined
		);

		return json({
			profile: {
				...userProfile,
				baseCurrencyBalance,
				totalPortfolioValue,
				flags: userProfile.flags.toString()
			},
			stats: {
				totalPortfolioValue,
				baseCurrencyBalance,
				holdingsValue: calculatedHoldingsValue,
				holdingsCount: portfolioStats.holdingsCount || 0,
				coinsCreated: createdCoins.length,
				totalTransactions: transactionStats[0]?.totalTransactions || 0,
				totalBuyVolume: transactionStats[0]?.totalBuyVolume || 0,
				totalSellVolume: transactionStats[0]?.totalSellVolume || 0,
				transactions24h: transactionStats24h[0]?.transactions24h || 0,
				buyVolume24h: transactionStats24h[0]?.buyVolume24h || 0,
				sellVolume24h: transactionStats24h[0]?.sellVolume24h || 0
			},
			createdCoins,
			recentTransactions,
			feedback,
			follow
		});
	} catch (e) {
		console.error('Failed to fetch user profile:', e);
		throw error(500, 'Failed to fetch user profile');
	}
}
