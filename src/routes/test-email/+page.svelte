<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import SendEmailForm from './send-email.svelte';
	export let data: PageData;
</script>

<div class="flex items-center justify-center">
	<div class="w-full max-w-lg pt-8">
		<Card.Header>
			<Card.Title>Enter email details</Card.Title>
			<!-- <Card.Description></Card.Description> -->
		</Card.Header>
		<Card.Content>
			<SendEmailForm data={data.form} />
		</Card.Content>
	</div>
</div>
