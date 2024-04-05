<script>
	import { serverSigninStore } from '$lib/auth/cookie-store';
	import { user } from '$lib/firebase/firebase';
	import SiteHeader from '$lib/components/site-header.svelte';
	import '../app.pcss';

	$serverSigninStore;
	$user;
</script>

<SiteHeader />
<div class="min-h-[calc(100vh-56px)]" id="page">
	<slot />
</div>
