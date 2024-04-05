<script lang="ts">
	import { user } from '$lib/firebase/firebase';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import { AuthButton } from '.';
</script>

{#if $user}
	<slot />
{:else}
	<Card.Root class="m-2">
		<Card.Header class="space-y-1">
			<Card.Title class="text-2xl">You aren't logged in</Card.Title>
			<Card.Description
				>You need to be logged in to view this page. If you already have an account you can login
				else click the SignUp button to create an account.</Card.Description
			>
		</Card.Header>

		<Card.Content class="flex flex-row flex-wrap justify-center gap-4">
			<AuthButton />
			<Button variant="ghost" href="/signup">Sign Up</Button>
			<Button variant="ghost" href="/">Home</Button>
		</Card.Content>
	</Card.Root>
{/if}
