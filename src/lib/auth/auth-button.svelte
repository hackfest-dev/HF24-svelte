<script lang="ts">
	import { Icons } from '$lib/icons';
	import { Button } from '$lib/components/ui/button';
	import { user } from '$lib/firebase/firebase';
	import { signInWithGoogle, signOutSSR } from '.';

	let signInMessage;
	let signOutMessage;

	async function signOut() {
		signOutMessage = await signOutSSR();
	}

	async function signIn() {
		signInMessage = await signInWithGoogle();
	}
</script>

{#if $user}
	<Button on:click={signOut}>Sign out</Button>
{:else}
	<Button on:click={signIn}>
		<Icons.google class="mr-2 h-3.5 w-3.5" />
		Login
	</Button>
{/if}
