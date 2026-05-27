<script lang="ts">
	import {
		BookOpen01Icon,
		Coins01Icon,
		DiscordIcon,
		GithubIcon,
		TradeUpIcon,
		UserIcon
	} from '@hugeicons/core-free-icons';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { _ } from 'svelte-i18n';
	import UserManualModal from '$lib/components/self/UserManualModal.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';

	let showUserManual = $state(false);
	function handleManual() {
		showUserManual = !showUserManual;
	}
</script>

<UserManualModal bind:open={showUserManual} />

<svelte:head>
	<title>{$_('about.title')} - BooPlay</title>
	<meta name="description" content={$_('about.seo_description')} />
	<meta name="keywords" content={$_('about.seo_keywords')} />
</svelte:head>

<div class="container mx-auto space-y-8 px-4 py-8">
	<div class="space-y-4 text-center">
		<div class="mb-4 flex items-center justify-center gap-2">
			<img src="/rugplay.svg" class="h-12 w-12" alt="Booplay" />
			<h1 class="text-4xl font-bold">BooPlay</h1>
		</div>
		<p class="text-muted-foreground mx-auto max-w-2xl text-lg">
			{$_('about.subtitle')}
		</p>
		<div class="flex flex-wrap justify-center gap-4">
			<Button onclick={handleManual} size="lg">
				<HugeiconsIcon icon={BookOpen01Icon} class="h-4 w-4" />
				{$_('about.user_manual_button')}
			</Button>
		</div>
	</div>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<HugeiconsIcon icon={Coins01Icon} class="text-primary h-5 w-5" />
					{$_('about.about_booplay.title')}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-3">
					<p class="text-muted-foreground text-sm">
						{$_('about.about_booplay.description_p1')}
					</p>
					<p class="text-muted-foreground text-sm">
						{$_('about.about_booplay.description_p2')}
					</p>
					<p class="text-muted-foreground text-sm">
						{$_('about.about_booplay.description_p3')}
					</p>
				</div>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<HugeiconsIcon icon={TradeUpIcon} class="text-primary h-5 w-5" />
					{$_('about.features.title')}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-2">
					<div class="flex items-center gap-2 text-sm">
						<span>🪙</span>
						<span>{$_('about.features.create_coins')}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span>🟢</span>
						<span>{$_('about.features.buy_coins')}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span>🔴</span>
						<span>{$_('about.features.sell_coins')}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span>⚖️</span>
						<span>{$_('about.features.predict')}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span>🎲</span>
						<span>{$_('about.features.arcade')}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span>📊</span>
						<span>{$_('about.features.treemap')}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<span>🏆</span>
						<span>{$_('about.features.leaderboard')}</span>
					</div>
				</div>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<HugeiconsIcon icon={UserIcon} class="text-primary h-5 w-5" />
					{$_('about.credits.title')}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div class="space-y-4">
					<p class="text-muted-foreground text-sm">{@html $_('about.credits.rugplay')}</p>
					<p class="text-muted-foreground text-sm">{@html $_('about.credits.xprismplay')}</p>
					<p class="text-muted-foreground text-sm">{@html $_('about.credits.booplay')}</p>
					<div class="flex flex-wrap gap-2">
						<Button
							variant="outline"
							size="sm"
							href={$_('about.credits.github_url_rugplay')}
							target="_blank"
							rel="noopener"
						>
							<HugeiconsIcon icon={GithubIcon} class="h-4 w-4" />
							{$_('about.credits.rugplay_github')}
						</Button>
						<Button
							variant="outline"
							size="sm"
							href={$_('about.credits.github_url_xprismplay')}
							target="_blank"
							rel="noopener"
						>
							<HugeiconsIcon icon={GithubIcon} class="h-4 w-4" />
							{$_('about.credits.xprismplay_github')}
						</Button>
						<Button
							variant="outline"
							size="sm"
							href={$_('about.credits.github_url_booplay')}
							target="_blank"
							rel="noopener"
						>
							<HugeiconsIcon icon={GithubIcon} class="h-4 w-4" />
							{$_('about.credits.our_github')}
						</Button>
						<Button
							variant="outline"
							size="sm"
							href={$_('about.credits.discord_url')}
							target="_blank"
							rel="noopener"
						>
							<HugeiconsIcon icon={DiscordIcon} class="h-4 w-4" />
							{$_('about.credits.our_discord')}
						</Button>
					</div>
					<p class="text-muted-foreground text-sm">
						{@html $_('about.credits.icons_credit')}
					</p>
					<p class="text-muted-foreground text-sm">
						{@html $_('about.credits.animations_credit')}
					</p>
				</div>
			</CardContent>
		</Card>
	</div>
</div>
