<script lang="ts">
	import { cn } from '$lib/utils';

	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<nav class={cn('hidden items-center space-x-4 md:flex lg:space-x-6', className)}>
	<a href="/examples/dashboard" class="text-sm font-medium hover:text-primary"> Overview </a>

	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground hover:text-primary"
	>
		Customers
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground hover:text-primary"
	>
		Products
	</a>
	<a
		href="/examples/dashboard"
		class="text-sm font-medium text-muted-foreground hover:text-primary"
	>
		Settings
	</a>
</nav>
