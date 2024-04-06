<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';
	import { formSchema, type FormSchema } from './schema';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { browser } from '$app/environment';
	import SuperDebug from 'sveltekit-superforms';
	import { Button } from '$lib/components/ui/button';

	// import { page } from '$app/stores';
	// const url = $page.url;
	// let source_country = {
	// 	value: url.searchParams.get('source'),
	// 	label: url.searchParams.get('source')
	// };
	// let dest_country = { value: url.searchParams.get('dest'), label: url.searchParams.get('dest') };
	// let product_hs = url.searchParams.get('product');

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema)
	});

	const { form: formData, enhance } = form;

	const countries = [
		'Japan',
		'France',
		'Canada',
		'Brazil',
		'Australia',
		'Italy',
		'Germany',
		'India',
		'United Kingdom',
		'Mexico',
		'Spain',
		'Argentina',
		'Indonesia',
		'South Africa',
		'Nigeria',
		'Russia',
		'Kenya',
		'Colombia',
		'Thailand',
		'Egypt'
	];

	$: selectedSource = $formData.source
		? {
				label: $formData.source,
				value: $formData.source
			}
		: undefined;

	$: selectedDestination = $formData.dest
		? {
				label: $formData.dest,
				value: $formData.dest
			}
		: undefined;

	$: selectedProduct = $formData.product
		? {
				label: $formData.product,
				value: $formData.product
			}
		: undefined;

	function handleSubmit() {
		// console.log('Form Data', $formData);

		fetch('/api/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify($formData)
		})
			.then((response) => {
				if (response.ok) {
					return response.json(); // This line retrieves the JSON data from the response
				} else {
					console.error('Form submission failed');
				}
			})
			.then((responseData) => {
				// console.log('response data', responseData); // Use the JSON data here
				// console.log('data object', data);

				data.data = responseData;
			})
			.catch((error) => console.error('Error submitting form:', error));

		console.log('Submitted');
	}
</script>

<!-- Source -->
<div class="flex items-center justify-between rounded-lg p-8 px-20 shadow-lg">
	<Form.Field {form} name="source" class="flex flex-col gap-1">
		<Form.Control let:attrs>
			<Form.Label class="text-xl font-semibold">Source</Form.Label>
			<!-- <Form.Description>Select your source country</Form.Description> -->

			<Select.Root
				selected={selectedSource}
				onSelectedChange={(v) => {
					v && ($formData.source = v.value);
				}}
			>
				<Select.Trigger {...attrs} class="h-8 min-w-40 border-2">
					<Select.Value placeholder="Choose source country" />
				</Select.Trigger>

				<Select.Content class="h-[75dvh] overflow-y-scroll">
					{#each countries as country}
						<Select.Item value={country} label={country}>{country}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<input hidden bind:value={$formData.source} name={attrs.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Destination -->
	<Form.Field {form} name="dest" class="flex flex-col gap-1">
		<Form.Control let:attrs>
			<Form.Label class="text-xl font-semibold">Destination</Form.Label>
			<!-- <Form.Description>Select your source country</Form.Description> -->

			<Select.Root
				selected={selectedDestination}
				onSelectedChange={(v) => {
					v && ($formData.dest = v.value);
				}}
			>
				<Select.Trigger {...attrs} class="h-8 min-w-40 border-2">
					<Select.Value placeholder="Choose dest country" />
				</Select.Trigger>

				<Select.Content class="h-[75dvh] overflow-y-scroll">
					{#each countries as country}
						<Select.Item value={country} label={country}>{country}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>

			<input hidden bind:value={$formData.dest} name={attrs.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<!-- Product -->
	<Form.Field {form} name="product" class="flex flex-col gap-1">
		<Form.Control let:attrs>
			<Form.Label class="text-xl font-semibold">Product (HS Code)</Form.Label>
			<Input
				{...attrs}
				bind:value={$formData.product}
				class="h-8 border-2"
				placeholder="Enter HS Code"
			/>
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<Button class="h-14 w-28 rounded-lg" on:click={handleSubmit}>Submit</Button>
</div>

<!-- {#if browser}
	<SuperDebug data={$formData} />
{/if} -->
