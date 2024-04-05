<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Popover from '$lib/components/ui/popover';
	import { Icons } from '$lib/icons';

	import { signInWithGoogle, signOutSSR } from '$lib/auth/signin';
	import { user, userData } from '$lib/firebase/firebase';
</script>

<!-- TODO: wrap everthing in a UserLoadCheck component in the future -->
{#if $user && $userData}
	<Popover.Root>
		<Popover.Trigger class="flex items-center">
			<Button class="h-7 w-7 rounded-full border bg-transparent p-0" variant={'secondary'}
				><img src={$user.photoURL} alt="" class="w-full rounded-full object-cover" /></Button
			>
		</Popover.Trigger>
		<Popover.Content class="rounded-md">
			<div class="flex max-w-xs flex-col gap-2">
				<div class="px-2 text-center text-lg">
					Hello <span class="font-semibold">{$userData.name}</span>
				</div>
				<Button class="border bg-transparent text-primary" variant={'secondary'}
					>You have an account!</Button
				>
				<!-- <a href="/{$userData.username}" class="contents"> <Button class="border bg-transparent text-primary" variant={'secondary'}>Your Public Profile</Button> </a>
				<a href="/{$userData.username}/edit" class="contents"><Button class="border bg-transparent text-primary" variant={'secondary'}>Edit Profile</Button></a> -->
				<Button on:click={signOutSSR}>Sign out</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{:else if $user}
	<Popover.Root>
		<Popover.Trigger class="flex items-center">
			<Button class="h-7 w-7 rounded-full border bg-transparent p-0" variant={'secondary'}
				><img src={$user.photoURL} alt="" class="w-full rounded-full object-cover" /></Button
			>
		</Popover.Trigger>
		<Popover.Content class="rounded-md">
			<div class="flex max-w-xs flex-col gap-2">
				<div class="px-2 text-lg">
					Hello {$user.displayName}, you don't have an account yet!
				</div>
				<a href="/create-account" class="contents"
					><Button variant="outline">Create Account</Button></a
				>
				<Button on:click={signOutSSR}>Sign out</Button>
			</div>
		</Popover.Content>
	</Popover.Root>
{:else}
	<Popover.Root>
		<Popover.Trigger>
			<Button
				class="aspect-square w-7 rounded-full bg-transparent p-0 hover:bg-transparent"
				variant={'secondary'}><Icons.user class="w-full" /></Button
			>
		</Popover.Trigger>
		<Popover.Content class="rounded-md">
			<div class="flex max-w-xs flex-col gap-2">
				<div class="px-2 text-lg">Login via Google</div>
				<Button on:click={signInWithGoogle}>
					<Icons.google class="mr-2 h-4 w-4" />
					Login
				</Button>
				<div class="px-2 text-lg">Don't have an account?</div>
				<a href="/signup" class="contents"><Button>Signup</Button></a>
			</div>
		</Popover.Content>
	</Popover.Root>
{/if}
