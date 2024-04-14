<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Select from '$lib/components/ui/select';
	import CountryCords from '../../(nonav)/features/countryCords.json';

	const countries = CountryCords.map((ele) => ele.name);
	let qp = false;
	let source_country = { value: '', label: '' };
	let dest_country = { value: '', label: '' };
	let product_category = { value: '', label: '' };

	function handleSubmit() {
		if (source_country.value === '' && dest_country.value === '' && product_category.value === '') {
			goto('/features');
		} else {
			qp = true;
			goto(
				`/features?source=${source_country.value}&dest=${dest_country.value}&product=${product_category.value}&qp=${qp}`
			);
		}
	}
</script>

<div class="mb-0 flex flex-col items-center justify-center gap-y-10">
	<div
		class="mb-0 flex w-full flex-col items-center justify-center gap-x-4 gap-y-4 px-16 sm:flex-row"
	>
		<Select.Root bind:selected={source_country}>
			<Select.Trigger
				class="h-16 w-full max-w-sm justify-center gap-x-2 rounded-full border-2 text-base sm:text-lg"
			>
				<Select.Value placeholder="Source" />
			</Select.Trigger>
			<Select.Content class="mt-2 h-[40vh] overflow-y-scroll rounded-lg">
				{#each countries as country}
					<Select.Item value={country} label={country}>{country}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>

		<Select.Root bind:selected={dest_country}>
			<Select.Trigger
				class="h-16 w-full max-w-sm justify-center gap-x-2 rounded-full border-2 text-base sm:text-lg"
			>
				<Select.Value placeholder="Destination" />
			</Select.Trigger>
			<Select.Content class="mt-2 h-[40vh] overflow-y-scroll rounded-lg">
				{#each countries as country}
					<Select.Item value={country} label={country}>{country}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>

		<Select.Root bind:selected={product_category}>
			<Select.Trigger
				class="h-16 w-full max-w-sm justify-center gap-x-2 rounded-full border-2 text-base sm:text-lg"
			>
				<Select.Value placeholder="Product Category" />
			</Select.Trigger>
			<Select.Content class="mt-2 rounded-lg">
				<Select.Item value="electronics">Electronics</Select.Item>
				<Select.Item value="edibles">Edibles</Select.Item>
				<Select.Item value="cosmetic">Cosmetic</Select.Item>
				<Select.Item value="clothing">Clothing</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>
	<Button class="mx-auto w-2/3" on:click={handleSubmit}>Submit</Button>
</div>
