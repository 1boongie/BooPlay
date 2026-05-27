<script lang="ts">
import { Award05Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/svelte";
import { onMount } from "svelte";
import { _ } from "svelte-i18n";
import { toast } from "svelte-sonner";
import SEO from "$lib/components/self/SEO.svelte";
import { Badge } from "$lib/components/ui/badge";
import { Button } from "$lib/components/ui/button";
import * as Card from "$lib/components/ui/card";
import {
	ACHIEVEMENT_CATEGORIES,
	type AchievementCategory,
	type AchievementDef,
	DIFFICULTY_CLASS,
} from "$lib/data/achievements";
import { NEW_ACHIEVEMENTS_COUNT } from "$lib/stores/achievements";
import { fetchGemsBalance } from "$lib/stores/gems";
import { fetchPortfolioSummary } from "$lib/stores/portfolio-data";
import { formatValue } from "$lib/utils";

interface AchievementWithStatus extends AchievementDef {
	unlocked: boolean;
	unlockedAt: string | null;
	claimed: boolean;
	progress: number | null;
}

let achievements = $state<AchievementWithStatus[]>([]);
let loading = $state(true);
let claimingId = $state<string | null>(null);
let claimingAll = $state(false);
let selectedCategory = $state<AchievementCategory | "all">("all");

const totalClaimed = $derived(achievements.filter((a) => a.claimed).length);
const totalAchievements = $derived(achievements.length);
const unclaimedCount = $derived(
	achievements.filter((a) => a.unlocked && !a.claimed).length,
);
const filteredAchievements = $derived(
	selectedCategory === "all"
		? achievements
		: achievements.filter((a) => a.category === selectedCategory),
);

const groupedAchievements = $derived.by(() => {
	const groups: {
		category: AchievementCategory;
		items: AchievementWithStatus[];
	}[] = [];
	const cats =
		selectedCategory === "all" ? ACHIEVEMENT_CATEGORIES : [selectedCategory];
	for (const cat of cats) {
		const items = achievements.filter((a) => a.category === cat);
		if (items.length > 0) {
			groups.push({ category: cat, items });
		}
	}
	return groups;
});

function difficultyLabel(difficulty: AchievementDef["difficulty"]) {
	return $_(`achievements.difficulties.${difficulty}`);
}

function categoryLabel(category: AchievementCategory | "all") {
	return $_(`achievements.categories.${category}`);
}

function rewardDescription(cashReward: number, gemReward: number) {
	return $_("achievements.reward_description").replace("{{cash}}", formatValue(cashReward)).replace("{{gems}}", gemReward.toString());
}

function achievementText(
	achievement: AchievementDef,
	part: "name" | "description",
) {
	const key = `achievements.items.${achievement.id}.${part}`;
	const translated = $_(key);
	return translated === key ? achievement[part] : translated;
}

onMount(async () => {
	try {
		const res = await fetch("/api/achievements");
		if (res.ok) {
			const data = await res.json();
			achievements = data.achievements;
			NEW_ACHIEVEMENTS_COUNT.set(data.unclaimedCount ?? 0);
		} else {
			toast.error($_("achievements.errors.load"));
		}
	} catch {
		toast.error($_("achievements.errors.load"));
	} finally {
		loading = false;
	}
});

async function claimAchievement(achievementId: string) {
	claimingId = achievementId;
	try {
		const res = await fetch("/api/achievements/claim", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ achievementId }),
		});
		if (res.ok) {
			const data = await res.json();
			achievements = achievements.map((a) =>
				a.id === achievementId ? { ...a, claimed: true } : a,
			);
			NEW_ACHIEVEMENTS_COUNT.set(unclaimedCount);
			toast.success($_("achievements.reward_claimed"), {
				description: rewardDescription(data.cashReward, data.gemReward),
			});
			fetchPortfolioSummary();
			fetchGemsBalance();
		} else {
			toast.error($_("achievements.errors.claim"));
		}
	} catch {
		toast.error($_("achievements.errors.claim"));
	} finally {
		claimingId = null;
	}
}

async function claimAll() {
	claimingAll = true;
	try {
		const res = await fetch("/api/achievements/claim", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ claimAll: true }),
		});
		if (res.ok) {
			const data = await res.json();
			achievements = achievements.map((a) =>
				a.unlocked ? { ...a, claimed: true } : a,
			);
			NEW_ACHIEVEMENTS_COUNT.set(0);
			toast.success(
				$_("achievements.claimed_all_success").replace("{{count}}", data.claimed),
				{
					description: rewardDescription(data.cashReward, data.gemReward),
				},
			);
			fetchPortfolioSummary();
			fetchGemsBalance();
		} else {
			toast.error($_("achievements.errors.claim_all"));
		}
	} catch {
		toast.error($_("achievements.errors.claim_all"));
	} finally {
		claimingAll = false;
	}
}

function formatProgress(current: number, target: number): string {
	if (target >= 1000000)
		return `${formatValue(current)} / ${formatValue(target)}`;
	return `${current.toLocaleString()} / ${target.toLocaleString()}`;
}
</script>

<SEO
	title={`${$_('page_names.achievements')} - BooPlay`}
	description={$_('achievements.seo_description')}
	keywords={$_('achievements.seo_keywords')}
/>

<div class="container mx-auto max-w-7xl p-4 md:p-6">
	<header class="mb-6 md:mb-8">
		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 class="flex items-center gap-2 text-2xl font-bold md:text-3xl">
					<HugeiconsIcon icon={Award05Icon} class="h-7 w-7 text-yellow-500" />
					{$_('page_names.achievements')}
				</h1>
				<p class="text-muted-foreground text-sm md:text-base">
					{#if loading}
						{$_('achievements.loading')}
					{:else}
						{$_('achievements.claimed_summary').replace("{{claimed}}", totalClaimed.toString()).replace("{{total}}", totalAchievements.toString())}
					{/if}
				</p>
			</div>
			{#if !loading && unclaimedCount > 0}
				<Button size="sm" onclick={claimAll} disabled={claimingAll}>
					{claimingAll
						? $_('achievements.claiming_all')
						: $_('achievements.claim_all').replace("{{count}}", unclaimedCount.toString())}
				</Button>
			{/if}
		</div>

		<!-- Progress bar -->
		{#if !loading}
			<div class="bg-muted mt-4 h-3 w-full overflow-hidden rounded-full">
				<div
					class="h-full rounded-full bg-yellow-500 transition-all duration-500"
					style="width: {totalAchievements > 0 ? (totalClaimed / totalAchievements) * 100 : 0}%"
				></div>
			</div>
		{/if}
	</header>

	<!-- Category filter -->
	<div class="mb-6 flex flex-wrap gap-2">
		<Button
			variant={selectedCategory === 'all' ? 'default' : 'outline'}
			size="sm"
			onclick={() => (selectedCategory = 'all')}
		>
			{categoryLabel('all')}
		</Button>
		{#each ACHIEVEMENT_CATEGORIES as cat}
			<Button
				variant={selectedCategory === cat ? 'default' : 'outline'}
				size="sm"
				onclick={() => (selectedCategory = cat)}
			>
				{categoryLabel(cat)}
			</Button>
		{/each}
	</div>

	{#if loading}
		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each Array(12) as _}
				<div class="bg-muted h-32 animate-pulse rounded-lg"></div>
			{/each}
		</div>
	{:else}
		{#each groupedAchievements as group}
			<div class="mb-8">
				<h2 class="mb-4 text-lg font-semibold">{categoryLabel(group.category)}</h2>
				<div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
					{#each group.items as achievement}
						<Card.Root
							class="relative h-full overflow-hidden transition-all duration-200 {achievement.unlocked &&
							!achievement.claimed
								? 'border-yellow-500/50 bg-yellow-500/10 shadow-md shadow-yellow-500/10'
								: achievement.claimed
									? 'border-yellow-500/30 bg-yellow-500/5 shadow-sm'
									: 'opacity-60'}"
						>
							<Card.Content class="flex h-full flex-col px-4 py-0">
								<div class="flex items-start gap-3">
									<img
										src="/achievements/{achievement.icon}"
										alt={achievementText(achievement, "name")}
										class="h-14 w-14 shrink-0 {achievement.unlocked ? '' : 'brightness-50'}"
									/>
									<div class="min-w-0 flex-1">
										<h3 class="truncate text-sm font-semibold">{achievementText(achievement, "name")}</h3>
										<p class="text-muted-foreground mt-0.5 line-clamp-2 text-xs">
											{achievementText(achievement, "description")}
										</p>
									</div>
									{#if achievement.unlocked && achievement.claimed}
										<div class="text-muted-foreground absolute top-2 right-2 text-lg">✓</div>
									{/if}
								</div>
								<div class="mt-auto ml-2 flex flex-col gap-1.5 pt-2">
									<div class="flex items-center gap-2">
										<Badge
											variant="outline"
											class="text-[10px] {DIFFICULTY_CLASS[achievement.difficulty]}"
										>
											{difficultyLabel(achievement.difficulty)}
										</Badge>
										<span class="text-muted-foreground text-[10px]">
											{rewardDescription(achievement.cashReward, achievement.gemReward)}
										</span>
									</div>
									{#if achievement.unlocked && !achievement.claimed}
										<Button
											size="sm"
											class="h-7 w-full text-xs"
											onclick={() => claimAchievement(achievement.id)}
											disabled={claimingId === achievement.id}
										>
											{claimingId === achievement.id ? $_('achievements.claiming') : $_('achievements.claim')}
										</Button>
									{:else if achievement.progress !== null && achievement.targetValue}
										<div>
											<div
												class="text-muted-foreground mb-1 flex items-center justify-between text-[10px]"
											>
												<span>{formatProgress(achievement.progress, achievement.targetValue)}</span>
												<span
													>{Math.floor(
														(achievement.progress / achievement.targetValue) * 100
													)}%</span
												>
											</div>
											<div class="bg-muted h-1.5 w-full overflow-hidden rounded-full">
												<div
													class="h-full rounded-full bg-yellow-500/60 transition-all duration-500"
													style="width: {(achievement.progress / achievement.targetValue) * 100}%"
												></div>
											</div>
										</div>
									{/if}
								</div>
							</Card.Content>
						</Card.Root>
					{/each}
				</div>
			</div>
		{/each}

		{#if filteredAchievements.length === 0}
			<div class="flex h-60 flex-col items-center justify-center">
				<p class="text-muted-foreground text-lg">{$_('achievements.no_category')}</p>
			</div>
		{/if}
	{/if}
</div>
