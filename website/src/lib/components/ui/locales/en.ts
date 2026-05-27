import { ACHIEVEMENTS } from '$lib/data/achievements';

const achievementItems = Object.fromEntries(
	ACHIEVEMENTS.map((achievement) => [achievement.id, { name: achievement.name, description: achievement.description }])
);

export default {
	lang: {
		code: 'en',
		name: 'English',
		flagCode: 'us'
	},
	global: {
		price: 'Price',
		name: 'Name',
		reset: 'Reset',
		apply: 'Apply',
		coin: 'Coin',
		max: 'Max',
		cancel: 'Cancel',
		try_again: 'Try Again',
		type: 'Type',
		sender: 'Sender',
		receiver: 'Receiver',
		unknown: 'Unknown',
		quantity: 'Quantity',
		amount: 'Amount',
		date: 'Date',
		note: 'Note',
		value: 'Value',
		live: '● LIVE'
	},
	greetings: {
		good_morning: 'Good Morning, {{name}}!',
		good_afternoon: 'Good afternoon, {{name}}!',
		good_evening: 'Good evening, {{name}}!',
		good_night: 'Good night, {{name}}!'
	},
	page_names: {
		home: 'Home',
		market: 'Market',
		hopium: 'Hopium',
		arcade: 'Arcade',
		leaderboard: 'Leaderboard',
		shop: 'Shop',
		achievements: 'Achievements',
		portfolio: 'Portfolio',
		treemap: 'Treemap',
		create_coin: 'Create Coin',
		notifications: 'Notifications',
		about: 'About',
		groups: 'Groups',
		lottery: 'Lottery',
		live_trades: 'Live Trades',
		settings: 'Settings',
		admin: {
			main: 'Admin',
			promo: 'Promo Codes'
		}
	},
	main: {
		title: 'Welcome to BooPlay!',
		description: "Here's the market overview for today.",
		market_overview: 'Market Overview'
	},
	achievements: {
		title: 'Achievements',
		seo_description:
			'Track your progress and unlock achievements in the BooPlay crypto trading simulator. Complete challenges to earn rewards.',
		seo_keywords: 'crypto game achievements, trading simulator challenges, virtual trading rewards',
		loading: 'Loading...',
		claimed_summary: '{{claimed}} / {{total}} claimed',
		claim_all: 'Claim All ({{count}})',
		claiming_all: 'Claiming...',
		claim: 'Claim',
		claiming: 'Claiming...',
		reward_claimed: 'Reward claimed!',
		claimed_all_success: 'Claimed {{count}} achievements!',
		reward_description: '+{{cash}} cash, +{{gems}} gems',
		errors: {
			load: 'Failed to load achievements',
			claim: 'Failed to claim achievement',
			claim_all: 'Failed to claim achievements'
		},
		no_category: 'No achievements in this category',
		categories: {
			all: 'All',
			trading: 'Trading',
			wealth: 'Wealth',
			creation: 'Coin Creation',
			arcade: 'Arcade',
			streaks: 'Daily Rewards & Streaks',
			prestige: 'Prestige',
			hopium: 'Hopium',
			social: 'Social',
			shop: 'Shop & Cosmetics',
			special: 'Special'
		},
		difficulties: {
			easy: 'Easy',
			medium: 'Medium',
			hard: 'Hard',
			legendary: 'Legendary'
		},
		items: achievementItems
	},
	lottery: {
		title: 'Lottery',
		description:
			'Daily draw — 90% to the winner, 10% to the bank. Win chance grows with the pool (50% at $1M).',
		seo_description:
			'Play the daily lottery in Booplay. Win up to 90% of the prize pool. $500 per ticket.',
		loading: 'Loading lottery...',
		active_title: 'Active lottery',
		active_subtitle: 'Current draw. See below for how the scaling and ticket validity work.',
		current_draw: 'CURRENT DRAW',
		prize_pool: 'Prize pool',
		winner_share: 'Winner (90%)',
		bank_share: 'Bank (10%)',
		draw_at: 'Draw at',
		how_it_works: 'How it works',
		how_chance_title: 'Win chance scales with the prize pool',
		how_chance_body:
			"At $0 the chance of picking a winner is 0.1%. It grows linearly to 50% when the pool reaches $1M. At the current pool of {{pool}}, today's draw chance is {{chance}}%. If no winner is picked, the pool rolls over to the next day.",
		how_tickets_title: 'Tickets are valid for one draw only',
		how_tickets_body:
			"Each ticket enters you into that day's draw only. If no winner is picked, the prize pool rolls over — but your tickets do not. You must purchase new tickets for the next draw.",
		breakdown_title: 'Prize pool breakdown',
		breakdown_tickets: 'Ticket revenue',
		breakdown_bank: 'Bank contribution (20% of profit)',
		breakdown_donations: 'Donations',
		breakdown_rollover: 'Rollover from previous',
		odds_title: 'Tickets & odds',
		odds_tickets_sold: 'Tickets sold',
		odds_draw_chance: 'Chance a winner is drawn',
		odds_per_ticket: 'Your chance per ticket',
		odds_your_tickets: 'Your tickets (this draw)',
		odds_combined: 'Your combined chance to win',
		purchase_title: 'Purchase tickets',
		purchase_subtitle:
			'{{price}} per ticket. Tickets are valid for this draw only — if the pool rolls over, buy again for the next draw.',
		number_of_tickets: 'Number of tickets',
		each: 'each',
		total: 'Total',
		purchase_button: 'Purchase tickets',
		purchasing: 'Purchasing...',
		sign_in_to_purchase: 'Sign in to purchase lottery tickets.',
		history_title: 'Past lotteries',
		history_subtitle: 'Completed draws and rollovers. Winners are announced in the news feed.',
		history_date: 'Date',
		history_pool: 'Prize pool',
		history_tickets: 'Tickets sold',
		history_status: 'Status',
		history_winner: 'Winner',
		history_prize: 'Prize',
		no_history: 'No completed draws yet.',
		status_won: 'Won',
		status_rollover: 'Rollover',
		invalid_quantity: 'Please enter a valid quantity between 1 and 100.',
		purchase_failed: 'Failed to purchase tickets.',
		purchased: 'Successfully purchased {{n}} ticket(s)!',

		tabs: {
			daily: 'Daily',
			weekly: 'Weekly',
			news: 'News'
		},

		weekly: {
			title: 'Weekly Lottery',
			description: 'Pick 6 numbers from 1–60. Draws every Sunday.',
			prize_pool: 'Weekly Prize Pool',
			how_title: 'Prize Tiers',
			jackpot: 'Jackpot (all 6 numbers)',
			match5: '2nd Prize (5 of 6)',
			match4: '3rd Prize (4 of 6)',
			jackpot_pct: '50% of prize pool',
			match5_pct: '30% of prize pool',
			match4_pct: '20% of prize pool',
			note: "10% seeds the next week's pool. Unclaimed tier prizes roll over.",
			pick_numbers_title: 'Pick Your Numbers',
			numbers_picked: '{{n}}/{{total}} selected',
			pick_exactly: 'Pick exactly {{n}} numbers',
			clear: 'Clear',
			buy_ticket: 'Buy Ticket',
			random_tickets: 'Buy Random Tickets',
			buy_random: 'Buy Random',
			ticket_bought: 'Weekly ticket(s) purchased!',
			your_tickets_title: 'Your Tickets This Draw',
			match_count: 'matches',
			pick_at_least: 'Pick at least {{n}} numbers',
			combinations: 'combinations',
			history_title: 'Past Weekly Draws',
			drawn_numbers: 'Drawn Numbers',
			jackpot_winners: 'Jackpot',
			match5_winners: '5 of 6',
			match4_winners: '4 of 6',
			no_history: 'No weekly draws yet'
		},

		news: {
			title: 'Lottery News',
			subtitle: 'History of all daily and weekly draws',
			daily: 'Daily',
			weekly: 'Weekly',
			no_data: 'No lottery history yet'
		},

		donate: {
			title: 'Donate to Prize Pool',
			subtitle: 'Your donation goes directly to the active daily prize pool',
			button: 'Donate',
			donating: 'Donating...',
			success: 'Successfully donated {{amount}} to the prize pool!',
			placeholder: 'Amount...'
		}
	},
	groups: {
		title: 'Groups',
		description: 'Join communities and manage a shared treasury',
		create: {
			button: 'Create Group',
			title: 'Create a Group',
			description: 'Costs ${{cost}} to create a group. You can create up to {{max}} groups.',
			name_label: 'Name',
			name_placeholder: 'My Awesome Group',
			name_hint: 'Letters, numbers, spaces, dashes, underscores',
			desc_label: 'Description',
			desc_placeholder: 'What is this group about?',
			public_label: 'Public Group',
			public_hint: 'Anyone can join without approval',
			submit: 'Create (${{cost}})',
			creating: 'Creating...',
			success: 'Group created!',
			errors: {
				name_required: 'Name required',
				failed: 'Failed to create group'
			}
		},
		my_groups: 'My Groups',
		browse: 'Browse Groups',
		no_groups: 'No groups found',
		members_count: '{{count}} members',
		treasury: 'Treasury: {{value}}',
		search_placeholder: 'Search groups...',
		visibility: {
			public: 'Public',
			private: 'Private'
		},
		roles: {
			owner: 'owner',
			admin: 'admin',
			member: 'member'
		},
		detail: {
			back: 'Back to Groups',
			tabs: {
				wall: 'Wall',
				members: 'Members',
				treasury: 'Treasury',
				requests: 'Requests'
			},
			join: 'Join',
			request_join: 'Request to Join',
			leave: 'Leave',
			settings: 'Settings',
			delete: 'Delete',
			joined: 'Joined group!',
			request_sent: 'Join request sent!',
			left: 'Left group',
			settings_saved: 'Settings saved',
			deleted: 'Group deleted',
			settings_dialog: {
				title: 'Group Settings',
				desc_label: 'Description',
				public_label: 'Public Group',
				public_hint: 'Anyone can join without approval',
				save: 'Save',
				saving: 'Saving...'
			},
			delete_dialog: {
				title: 'Delete Group',
				description: 'This is permanent. Treasury funds will be refunded to you.',
				confirm: 'Delete',
				deleting: 'Deleting...'
			},
			wall: {
				placeholder: 'Post something on the wall...',
				post: 'Post',
				posting: 'Posting...',
				empty: 'No posts yet',
				deleted: 'Post deleted'
			},
			members: {
				promote: 'Promote',
				demote: 'Demote',
				kick: 'Kick',
				kick_success: 'Member kicked',
				role_updated: 'Role updated'
			},
			treasury: {
				title: 'Treasury',
				balance: 'Balance',
				deposit: 'Deposit',
				withdraw: 'Withdraw',
				processing: 'Processing...',
				deposited: 'Deposited {{value}}',
				withdrew: 'Withdrew {{value}}',
				amount_placeholder: 'Amount',
				note_placeholder: 'Note (optional)',
				no_transactions: 'No transactions yet',
				recent: 'Recent Transactions'
			},
			requests: {
				empty: 'No pending join requests',
				accept: 'Accept',
				deny: 'Deny',
				accepted: 'Request accepted',
				denied: 'Request denied'
			}
		}
	},
	coin: {
		'24hchange': '24h change',
		marketcap: 'Market Cap',
		volume24h: 'Volume (24h)',
		createdBy: 'Created by',
		delisted: 'Delisted',
		priceChart: [
			'Price Chart ({{time}})',
			'1 minute',
			'5 minutes',
			'15 minutes',
			'1 hour',
			'4 hours',
			'1 day',
			'No trading data available yet'
		],
		trade: {
			title: 'Trade {{symbol}}',
			youOwn: 'You own: {{shares}} {{symbol}}',
			lock: ['🔒 Creator-only period: {{time}} remaining', '🔒 Trading unlocks in: {{time}}'],
			buy: {
				title: 'Buy {{symbol}}',
				current: 'Current price: ${{price}} per {{symbol}}',
				amountSpend: ['Amount to spend ($)', 'Balance: {{balance}}'],
				buy: 'Buy {{symbol}}'
			},
			sell: {
				title: 'Sell {{symbol}}'
			},
			burn: {
				title: 'Burn {{symbol}} Tokens'
			}
		},
		pool: {
			title: 'Pool Composition',
			baseCurrency: 'Base Currency:',
			burnedCoins: 'Burned Coins:',
			stats: {
				liquity: 'Total Liquity:',
				currentPrice: 'Current Price:'
			}
		},
		topHolders: {
			title: 'Top Holders'
		}
	},
	sign_in: {
		message: ['You need to', 'sign in', 'to play.'],
		sign_in: 'Sign In',
		form: {
			title: 'Sign in to BooPlay',
			description:
				"Choose a service to sign in with. Your account will be created automatically if you don't have one.",
			services: {
				discord: 'Continue with Discord'
			},
			terms: ['By continuing, you agree to our', 'Terms of Service', 'and', 'Privacy Policy']
		},
		portfolio: ['You need to be logged in to view your portfolio', 'Sign In'],
		trade: 'Sign in to start trading'
	},
	leaderboard: {
		title: 'Leaderboard',
		description: 'Top performers and market activity',
		no_data: 'No data',
		failed: {
			title: 'Failed to load leaderboard',
			// TODO: Removing this line soon
			try_again: 'Try Again'
		},
		rugpullers: {
			title: 'Top Rugpullers (24h)',
			description: 'Users who made the most profit from selling coins today',
			no_data: 'No major profits recorded today'
		},
		losers: {
			title: 'Biggest Losses (24h)',
			description: 'Users who experienced the largest losses today',
			no_data: 'No major losses recorded today'
		},
		top_cash: {
			title: 'Top Cash Holders',
			description: 'Users with the highest liquid cash balances',
			no_data: "Everyone's invested! 💸"
		},
		portfolio: {
			title: 'Highest Portfolio Values',
			description: 'Users with the largest total portfolio valuations (including illiquid)',
			no_data: 'No large portfolios yet! 📉'
		}
	},
	market: {
		title: 'Market',
		description: 'Discover coins, track performance, and find your next investment',
		showing: 'Showing {{startIndex}}-{{endIndex}} of {{totalCount}} coins',
		search: {
			placeholder: 'Search coins by name or symbol...',
			filters: {
				title: 'Filters',
				sort_by: 'Sort By',
				marketcap: 'Market Cap',
				change24h: 'Change (24h)',
				price: 'Price',
				volume24h: 'Volume (24h)',
				clear: 'Clear all filters',
				sort_order: {
					title: 'Sort Order',
					high_low: 'High to Low',
					low_high: 'Low to High'
				},
				price_range: {
					title: 'Price Range',
					all_prices: 'All Prices',
					under1: 'Under $1',
					'1-10': '$1 - $10',
					'10-100': '$10 - $100',
					over100: 'Over $100'
				},
				'24h_change': {
					title: '24h Change',
					all: 'All Changes',
					gainers: 'Gainers only',
					losers: 'LOsers only',
					hot: 'Hot (10%)',
					wild: 'Wild (50%)'
				}
			}
		}
	},
	portfolio: {
		title: 'Portfolio',
		description: 'Manage your investments and transactions',
		cash_balance: ['Cash Balance', '{{percent}}% of portfolio'],
		coin_holdings: ['Coin Holdings', '{{quantity}} positions'],
		your_holdings: ['Your Holdings', 'Current positions in your portfolio'],
		recent_transactions: ['Recent Transactions', 'Your latest trading activity', 'View All'],
		total: 'Total',
		no_coins: [
			'No coin holdings',
			"You haven't invested in any coins yet. Start by buying existing coins.",
			'Browse Coins'
		],

		send_money: {
			title: 'Send Money',
			send: ['Send', 'Sending...'],
			description: 'Send cash or coins to another user',
			recipient: ['Recipient', 'Enter username (without @)'],
			type: ['Type', 'Cash ($)', 'Coins', 'Select transfer type'],
			cash: [
				'Amount ($)',
				'Available: ${{balance}}',
				'Minimum: $10.00 per transfer',
				'Cash transfers require a minimum of $10.00',
				'Insuficient Funds',
				'Money sent successfully!',
				'Sent ${{amount}} to @{{recipent}}'
			],
			coins: [
				'Select Coin',
				'Amount {{coinSymbol}}',
				'Available: {{shares}}',
				'Minimum estimated value: $10.00 per transfer',
				'Coin transfers require a minimum estimated value of $10.00',
				'Insufficient coins',
				'Coins sent successfully!',
				'Sent {{amount}} {{symbol}} (≈${{estimated}}) to @${{recipent}}',
				'*{{symbol}} ({{quantity}}'
			],
			note: ['Note', '(optional)', 'Add a reference note to this transfer...'],
			youre_sending: ["You're sending:", '{{amount}} USD', 'To:']
		},
		no_transactions: [
			'No transactions yet',
			"You haven't made any trades yet. Start by buying or selling coins."
		]
	},
	settings: {
		title: 'Settings',
		seo_description:
			'Manage your Booplay account settings, profile information, audio preferences, and privacy options.',
		seo_keywords:
			'game account settings, profile settings game, privacy settings, audio settings game',
		not_logged_in: 'You need to be logged in to view your settings',
		sign_in_button: 'Sign In',
		profile_settings: {
			title: 'Profile Settings',
			description: 'Update your profile information',
			display_name_label: 'Display Name',
			display_name_required: 'Display name is required.',
			display_name_min: 'Display name must be at least 2 characters.',
			display_name_max: 'Display name must be 50 characters or less.',
			username_label: 'Username',
			username_hint: 'Only letters, numbers, underscores. 3–30 characters.',
			username_checking: 'Checking…',
			username_taken: 'Taken',
			bio_label: 'Bio',
			bio_placeholder: 'Tell us about yourself',
			timezone_label: 'Timezone',
			avatar_change_text: 'Change',
			save_changes_button: 'Save Changes',
			saving_button: 'Saving…',
			success_message: 'Settings updated successfully!',
			success_refresh: 'Refresh',
			error_message: 'Failed to update settings',
			unexpected_error: 'An unexpected error occurred',
			profile_picture_large: 'Profile picture must be smaller than 1MB',
			invalid_image: 'Please select a valid image file'
		},
		audio_settings: {
			title: 'Audio Settings',
			description: 'Adjust volume for game sounds',
			volume_label: 'Volume',
			volume_hint: 'Controls all game sounds including effects and background audio'
		},
		notification_settings: {
			title: 'Notification Settings',
			description: 'Control how you receive notifications',
			mentions_title: 'Mentions',
			mentions_description: 'Receive notifications when someone @mentions you in comments'
		},
		blocked_users: {
			title: 'Blocked Users',
			description: "Users you've blocked won't appear in comments and can't send you notifications",
			loading: 'Loading...',
			no_blocked: "You haven't blocked anyone.",
			unblock_button: 'Unblock',
			unblocking_button: 'Unblocking...',
			unblock_success: 'Unblocked @{{username}}',
			unblock_failed: 'Failed to unblock user',
			load_failed: 'Failed to load blocked users'
		},
		data_privacy: {
			title: 'Data & Privacy',
			description: 'Manage your personal data and account',
			download_title: 'Download Your Data',
			download_description:
				'Export a complete copy of your account data including transactions, bets, and profile information.',
			download_button: 'Download Data',
			downloading_button: 'Downloading...',
			download_started: 'Your data download has started',
			download_size_confirm:
				'Your data export is {{size}}MB. This may take a while to download. Continue?',
			download_failed: 'Failed to start data download: {{error}}',
			delete_title: 'Delete Account',
			delete_description:
				'Schedule your account for permanent deletion. This will anonymize your data while preserving transaction records for compliance.',
			delete_button: 'Delete Account',
			delete_modal_title: 'Delete Account',
			delete_modal_description:
				'This action cannot be undone. Your account will be scheduled for permanent deletion, after a grace period of {{days}} days. Your data will be anonymized.',
			delete_what_happens: 'What happens when you delete your account:',
			delete_list_profile: '• Your profile information will be permanently removed',
			delete_list_logout: '• You will be logged out from all devices',
			delete_list_anonymize: '• Your comments will be anonymized',
			delete_list_transactions:
				'• Transaction history will be preserved for compliance (anonymized)',
			delete_list_recovery: '• You will not be able to recover this account',
			delete_confirmation_label: 'Type "DELETE MY ACCOUNT" to confirm:',
			delete_confirmation_placeholder: 'DELETE MY ACCOUNT',
			delete_cancel_button: 'Cancel',
			delete_confirm_button: 'Delete Account',
			deleting_button: 'Deleting...',
			delete_confirm_type_error: 'Please type "DELETE MY ACCOUNT" to confirm',
			delete_scheduled: 'Account deletion scheduled successfully',
			delete_already_scheduled: 'Account deletion already scheduled',
			delete_already_scheduled_desc:
				'You have already requested account deletion. Contact support to cancel.',
			delete_failed: 'Failed to delete account: {{error}}'
		}
	},
	about: {
		title: 'About',
		seo_description:
			'Learn about Booplay - a realistic cryptocurrency trading simulation focusing on DeFi risks and mechanics.',
		seo_keywords:
			'crypto trading simulator, DeFi simulation, virtual trading, trading game, cryptocurrency education',
		subtitle: 'A crypto trading simulator where you can practice trading without losing real money. Create coins, trade them, and rug pull!',
		user_manual_button: 'User Manual',
		about_booplay: {
			title: 'About BooPlay',
			description_p1:
				'BooPlay is a realistic cryptocurrency trading simulation that focuses on DeFi (Decentralized Finance) mechanics and the inherent risks of decentralized trading.',
			description_p2:
				'Practice trading strategies, create your own coins, and learn about market dynamics without any real financial risk. Experience AMM trading, liquidity pools, and even rug pulls. (duh)',
			description_p3: 'Join the community of degenerates where paranoia is profitable!'
		},
		features: {
			title: 'Features',
			create_coins: 'Create coins',
			buy_coins: 'Buy coins',
			sell_coins: 'Sell coins',
			predict: 'Predict on questions (similar to Polymarket)',
			arcade: 'Play arcade games',
			treemap: 'View a Treemap graph of the entire market',
			leaderboard: 'Compete on leaderboards'
		},
		credits: {
			title: 'Credits',
			rugplay: 'Rugplay Created by <strong>FaceDev</strong>',
			xprismplay: 'XprismPlay Maintened by <strong>Xprism</strong>',
			booplay: 'BooPlay Maintened by <strong>Boongie</strong>',
			rugplay_github: "Rugplay's GitHub",
			xprismplay_github: "XPrismPlay's GitHub",
			our_github: 'Our GitHub',
			github_url_rugplay: 'https://github.com/outpoot/booplay',
			github_url_xprismplay: 'https://github.com/xprismplay/XPrismPlay',
			github_url_booplay: 'https://github.com/1boongie/BooPlay',
			our_discord: 'Our Discord',
			discord_url: 'https://discord.gg/JGT4JJv5M7',
			icons_credit: 'Achievement icons by <a href="https://twitter.com/gvesster" target="_blank" rel="noopener" class="text-primary underline">gvstr</a>',
			animations_credit: 'Chest animations by <a href="https://admurin.itch.io/" target="_blank" rel="noopener" class="text-primary underline">admurin</a>'
		}
	}
};
