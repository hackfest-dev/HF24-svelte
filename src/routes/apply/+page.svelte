<script>
	import { goto } from '$app/navigation';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';

	const cards = [
		{
			title: 'Building Permit',
			description: 'Description for Permit A.',
			imageUrl: '/placeholder/landscape.png',
			selected: false,
			altText: 'Permit A'
		},
		{
			title: 'Business Registration',
			description: 'Description for Permit B.',
			imageUrl: '/placeholder/landscape.png',
			selected: true,
			altText: 'Permit B'
		},
		{
			title: 'Environment Assessment',
			description: 'Description for Permit C.',
			imageUrl: '/placeholder/landscape.png',
			selected: false,
			altText: 'Permit C'
		},
		{
			title: 'Trade License',
			description: 'Apply for a trade license to start your business.',
			imageUrl: '/placeholder/landscape.png',
			selected: false,
			altText: 'Trade License'
		},
		{
			title: 'Permit E',
			description: 'Description for Permit F.',
			imageUrl: '/placeholder/landscape.png',
			selected: false,
			altText: 'Permit E'
		},
		{
			title: 'Permit F',
			description: 'Description for Permit F.',
			imageUrl: '/placeholder/landscape.png',
			selected: false,
			altText: 'Permit F'
		}
	];
</script>

<div class="flex flex-wrap items-center justify-center md:h-[calc(100vh-56px)]">
	<!-- <div
		class="container grid gap-4 rounded-lg px-4 md:max-w-2xl md:grid-cols-5 md:gap-10 lg:max-w-4xl lg:grid-cols-7 xl:max-w-7xl"
	> -->
	<div class="grid px-4 md:grid-cols-8 lg:grid-cols-10">
		<div></div>
		<div class="flex flex-col justify-center py-6 md:col-span-2 md:max-h-screen lg:col-span-3">
			<h1 class="w-full text-center text-3xl font-bold md:text-4xl lg:text-5xl xl:text-7xl">
				Choose Application Type
			</h1>
		</div>
		<div></div>
		<div class="flex flex-col justify-center md:col-span-3 lg:col-span-4">
			<div
				class="grid gap-4 overflow-x-auto px-2 md:max-h-[56vh] md:overflow-y-scroll"
				style="scrollbar-width: 4px;"
			>
				{#each cards as card, i}
					<Card.Root class="bg-muted p-4 hover:bg-primary-foreground hover:shadow-xl">
						<Card.Header class="p-0">
							<img
								alt={card.altText}
								class="rounded-lg"
								height="64"
								src={card.imageUrl}
								style="aspect-ratio: 64/64; object-fit: cover;"
								width="64"
							/>
						</Card.Header>
						<Card.Content class="p-0">
							<div class="grid gap-1.5">
								<h2 class="text-base font-bold">{card.title}</h2>
								<p class="text-sm text-gray-500 dark:text-gray-400">{card.description}</p>
							</div>
						</Card.Content>
					</Card.Root>
				{/each}
			</div>
			<div class="my-8 md:max-h-[calc(25vh-28px)]">
				<Button class="bshadow-sm w-full items-center justify-center" on:click={() => goto('#')}>
					Continue

					<svg
						class="h-4 w-4"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="m9 18 6-6-6-6" />
					</svg>
				</Button>
			</div>
		</div>
	</div>
</div>
