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

<section class="flex flex-col gap-y-10">
	<header class="flex flex-col items-center justify-center">
		<h1
			class="max-w-7xl px-8 pb-10 pt-16 text-center text-2xl font-extrabold sm:px-20 sm:text-3xl md:px-32 md:text-6xl"
		>
			Navigate International Logistics with Ease
		</h1>
		<p
			class="max-w-3xl px-4 text-center text-sm text-muted-foreground sm:px-10 sm:text-lg md:px-20 md:text-lg"
		>
			Effortlessly navigate <span class="font-bold text-accent-foreground"
				>international shipping routes</span
			> with our platform. Also get tax insights and intelligent route recommendations.
		</p>
	</header>
	<div class="mx-auto flex w-full max-w-xl flex-col gap-y-14">
		<div class="mb-0 flex flex-col items-center justify-center gap-y-10">
			<div class="mb-0 flex w-full items-center justify-center gap-x-4">
				<Select.Root bind:selected={source_country}>
					<Select.Trigger
						class="h-16 w-full max-w-md justify-center gap-x-2 rounded-full border-2 text-lg"
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
						class="h-16 w-full max-w-md justify-center gap-x-2 rounded-full border-2 text-lg"
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
						class="h-16 w-full max-w-md justify-center gap-x-2 rounded-full border-2 text-lg"
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
		<!-- <div class="mx-auto grid w-[280px] py-10 antialiased md:w-[500px] lg:w-[800px]">
		<div class="flex flex-col md:flex-row">
			<img
				src="https://source.unsplash.com/350x350"
				alt=" random imgee"
				class="w-full rounded-lg object-cover object-center shadow-md"
			/>

			<div class="relative -mt-16 px-4 md:-ml-24 md:-mt-10">
				<div class="rounded-lg border bg-primary p-6 shadow-lg">
					<h4 class="mt-1 truncate text-sm font-bold leading-tight text-secondary md:text-xl">
						Check out our interactive map!
					</h4>

					<p class="mt-1 text-xs text-slate-400 dark:text-slate-600 md:text-sm">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, tempore incidunt
						consequuntur officiis esse veritatis atque ea nihil voluptatibus cupiditate.
					</p>
					<div class="mt-4">
						<span class="text-md font-semibold text-secondary">Lorem Ipsum </span>
					</div>
				</div>
			</div>
		</div>
	</div> -->
	</div>
</section>
