<script>
	import Footer from '$lib/components/footer/footer.svelte';
</script>

<div class="min-h-[calc(100vh-56px)]">
	<div
		class="absolute -z-10 flex h-full w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black dark:bg-grid-white/[0.2]"
	>
		<div
			class="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
		/>
	</div>
	<div class="flex-1">
		<slot />
	</div>
</div>
<Footer />
