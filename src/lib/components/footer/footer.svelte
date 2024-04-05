<script>
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';
</script>

<footer class="flex w-full flex-col gap-y-4 border-t bg-background p-6 sm:p-10">
	<!-- TODO: Add Social Links in the future -->
	<div class="flex w-full justify-center gap-x-4 text-sm sm:text-base">
		<a
			href="/features"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname === '/features' ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Features
		</a>
		<a
			href="/docs"
			class={cn(
				'transition-colors hover:text-foreground/80',
				$page.url.pathname.startsWith('/docs') ? 'text-foreground' : 'text-foreground/60'
			)}
		>
			Docs
		</a>
	</div>
	<div class="flex h-full w-full items-center justify-center">
		<p class="text-xs font-small tracking-wide text-muted-foreground sm:text-lg">
			@ Team Svelte - Hackfest 24 
		</p>
	</div>
</footer>
