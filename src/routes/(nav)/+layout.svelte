<script>
	import SiteHeader from '$lib/components/site-header.svelte';
</script>

<SiteHeader />
<div class="min-h-[calc(100vh-56px)]" id="page">
	<slot />
</div>
