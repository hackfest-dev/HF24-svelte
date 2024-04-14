<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import * as Drawer from '$lib/components/ui/drawer';

	import { Separator } from '$lib/components/ui/separator';
	import { Icons } from '$lib/icons';
	import SvelteMarkdown from 'svelte-markdown';
	import Map from './Map.svelte';
	import ResultTable from './ResultTable.svelte';
	import UserForm from './user-form.svelte';
	import UserMenu from './user-menu.svelte';

	import { PUBLIC_MAPS_API_KEY } from '$env/static/public';

	import type { PageData } from './$types';
	export let data: PageData;
</script>

<!-- {JSON.stringify(data)} -->

<div class="flex h-screen flex-col gap-6 px-4 py-6 md:px-16">
	<!-- Header Section -->
	<div class="hidden w-full flex-col items-center gap-2 sm:flex sm:flex-row md:gap-6">
		<UserMenu></UserMenu>
		<Card.Root class="w-full">
			<!-- <Card.Content class="w-full"> -->
			<UserForm bind:data={data.form} />
			<!-- </Card.Content> -->
		</Card.Root>
	</div>

	<div class="flex w-full flex-row items-center gap-2 sm:hidden">
		<UserMenu></UserMenu>
		<Drawer.Root>
			<Drawer.Trigger>
				<Card.Root class="h-full w-full shadow-lg">
					<Card.Content class="flex gap-2 font-bold h-full w-full items-center justify-center p-3 text-sm"
						><p>Options</p><Icons.pizza /></Card.Content
					>
				</Card.Root>
			</Drawer.Trigger>
			<Drawer.Content>
				<Drawer.Close></Drawer.Close>
				<UserForm bind:data={data.form} />
			</Drawer.Content>
		</Drawer.Root>
	</div>

	<!-- Maps and Results Sections -->
	<div class="flex h-full flex-col gap-2 sm:h-[70vh] sm:flex-row md:gap-4">
		<!-- The map -->
		<Map
			class="h-full w-full rounded-lg border shadow-lg sm:w-2/3"
			apiKey={PUBLIC_MAPS_API_KEY}
			bind:pathCoordinatesArray={data.form.pathCoordinatesArray}
		></Map>

		<!-- Right side results and stats section -->
		<Card.Root
			class="flex h-full w-full flex-col gap-4 overflow-y-scroll rounded-lg shadow-xl sm:w-1/3 "
		>
			<Card.Header>
				<Card.Title>AI Analysis</Card.Title>
				{#if data?.form?.gem}
					<Card.Description class="pt-8 text-foreground">
						<SvelteMarkdown source={data?.form?.gem ?? ``} />
					</Card.Description>
				{:else}
					<Card.Description>
						Analysis of shipping products from {data?.form?.source ?? 'country A'} to {data?.form
							?.dest ?? 'country B'} using AI
					</Card.Description>
				{/if}
			</Card.Header>

			<Separator />

			<Card.Header>
				<Card.Title>Charges and Taxes on import</Card.Title>
				<Card.Description>
					Estimate of various taxes and duties in shipping your product from {data?.form?.source ??
						'country A'} to {data?.form?.dest ?? 'country B'}
				</Card.Description>
				{#if data?.form?.gem}
					<Card.Content>
						<ResultTable data={data.form.data} />
					</Card.Content>
				{/if}
			</Card.Header>

			<Separator />

			<Card.Header>
				<Card.Title>Similar Transactions</Card.Title>
				<Card.Description>
					Here are some of the matching transactions from {data?.form?.source ?? 'country A'} to
					{data?.form?.dest ?? 'country B'} of the product category X
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</div>
</div>
