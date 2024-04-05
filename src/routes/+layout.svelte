<script>
	import { serverSigninStore } from '$lib/auth/cookie-store';
	import { user } from '$lib/firebase/firebase';
	import '../app.pcss';

	$serverSigninStore;
	$user;
</script>


	<slot />