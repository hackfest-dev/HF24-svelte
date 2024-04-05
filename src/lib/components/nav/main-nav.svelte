<script lang="ts">
	import { page } from '$app/stores';
	import { siteConfig } from '$lib/config/site';
	import { cn } from '$lib/utils';
	import { Icons } from '$lib/icons';
</script>

<div class="mr-4 hidden md:flex">
	<a href="/" class="mr-10 flex items-center">
		<Icons.logoDark class="rounded-full mr-4 hidden dark:block" />
		<Icons.logo class="rounded-full mr-4 dark:hidden" />
		<span class="hidden text-[15px] font-bold sm:inline-block lg:text-base">
			{siteConfig.name}
		</span>
	</a>
	<nav class="flex items-center space-x-6 text-sm font-medium">
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
		<!-- <a
			href={siteConfig.links.github}
			target="_blank"
			rel="noopener noreferrer"
			class={cn('hidden text-foreground/60 transition-colors hover:text-foreground/80 xl:block')}
		>
			GitHub
		</a> -->
	</nav>
</div>
