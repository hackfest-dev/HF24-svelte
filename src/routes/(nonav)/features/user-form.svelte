<script lang="ts">
	import { replaceState } from '$app/navigation';
	import { page } from '$app/stores';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import * as Select from '$lib/components/ui/select';
	import { onMount } from 'svelte';
	import CountryCords from './countryCords.json';

	export let data: {
		source: string;
		dest: string;
		product: string;
		qp: string;
		gem: string;
		pathCoordinatesArray: any;
		data: any;
	};

	const countries = CountryCords.map((ele) => ele.name);

	let source: { value: string; label?: string; disabled?: boolean };
	let dest: { value: string; label?: string; disabled?: boolean };
	let product: string;

	onMount(() => {
		console.log(data);

		source = {
			value: data.source,
			label: data.source
		};

		dest = {
			value: data.dest,
			label: data.dest
		};

		product = data.product ?? '';

		if (data.qp === 'true') {
			data.qp = 'false';
			$page.url.searchParams.set('qp', 'false');
			replaceState($page.url, { replace: true });
			handleSubmit();
		}
	});

	function handleSubmit() {
		fetch('/api/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then((response) => {
				if (response.ok) {
					return response.json(); // This line retrieves the JSON data from the response
				} else {
					console.error('Form submission failed');
				}
			})
			.then((responseData) => {
				console.log('response data', responseData); // Use the JSON data here

				data.gem = responseData.gem;
				data.pathCoordinatesArray = responseData.pathCoordinatesArray;
				data.data = responseData.data;
			})
			.catch((error) => console.error('Error submitting form:', error));

		console.log('Submitted');
	}

	$: data.source = source?.value ?? data.source;
	$: data.dest = dest?.value ?? data.dest;
	$: data.product = product ?? data.product;
</script>

<!-- {JSON.stringify(dest)}
{JSON.stringify(source)}
{JSON.stringify(product)} -->

<div
	class="flex flex-col items-center justify-between gap-2 rounded-lg p-8 shadow-lg sm:flex-row sm:gap-4 sm:py-8 lg:px-20"
>
	<div class="flex w-full flex-col justify-around gap-2 sm:w-1/2 lg:flex-row lg:items-center">
		<div class="flex flex-col gap-1">
			<Label class="text-xl font-semibold">Source</Label>
			<Select.Root bind:selected={source}>
				<Select.Trigger class="h-8 min-w-40 border-2">
					<Select.Value placeholder="Choose source country" />
				</Select.Trigger>

				<Select.Content class="h-[75dvh] overflow-y-scroll">
					{#each countries as country}
						<Select.Item value={country} label={country}>{country}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>

		<div class="flex flex-col gap-1">
			<Label class="text-xl font-semibold">Destination</Label>

			<Select.Root bind:selected={dest}>
				<Select.Trigger class="h-8 min-w-40 border-2">
					<Select.Value placeholder="Choose dest country" />
				</Select.Trigger>

				<Select.Content class="h-[75dvh] overflow-y-scroll">
					{#each countries as country}
						<Select.Item value={country} label={country}>{country}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		</div>
	</div>

	<div class="flex w-full flex-col justify-around gap-2 sm:w-1/2 lg:flex-row lg:items-center">
		<div class="flex w-full flex-col gap-1 place-self-start lg:w-auto">
			<Label class="text-xl font-semibold">Product</Label>
			<Input bind:value={product} class="h-8 border-2" placeholder="Enter HS Code" />
		</div>

		<Button class="h-14 w-full rounded-lg p-8 lg:w-28 lg:p-0" on:click={handleSubmit}>Submit</Button
		>
	</div>
</div>
