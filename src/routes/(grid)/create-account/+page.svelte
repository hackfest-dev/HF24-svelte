<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import UserDetailsForm from './user-details.svelte';
	export let data: PageData;
</script>

<div class="flex min-h-[calc(100vh-56px)] items-center justify-center align-middle">
	<div class="w-full max-w-lg px-2 pb-8">
		<Card.Root>
			<Card.Header>
				<Card.Title>Enter your details</Card.Title>
				<!-- <Card.Description></Card.Description> -->
			</Card.Header>
			<Card.Content>
				<UserDetailsForm data={data.form} />
			</Card.Content>
		</Card.Root>
	</div>
</div>
