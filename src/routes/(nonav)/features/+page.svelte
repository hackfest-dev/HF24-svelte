<script>
	import { Input } from '$lib/components/ui/input';
	import Map from '$lib/components/map/Map.svelte';
	import { PUBLIC_MAPS_API_KEY } from '$env/static/public';
	import * as Card from '$lib/components/ui/card';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Icons } from '$lib/icons';
	import { siteConfig } from '$lib/config/site';
	import ProfileButton from '$lib/profile/profile-button.svelte';
	import { ThemeToggleButton } from '$lib/components/theme';
	import { Separator } from '$lib/components/ui/separator';

	let chosen_country = 'Choose Country ';

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
</script>

<div class="flex h-screen flex-col gap-6 px-16 py-6">
	<!-- User input row -->
	<div class=" flex items-center gap-6">
		<Card.Root class="h-full w-fit shadow-lg">
			<Card.Content class="flex h-full flex-col items-center justify-between px-2 pb-2 ">
				<a href="/" class="my-2">
					<Icons.logoDark class="hidden rounded-full dark:block" />
					<Icons.logo class="rounded-full dark:hidden" />
				</a>
				<Separator />
				<ProfileButton />
				<ThemeToggleButton />
			</Card.Content>
		</Card.Root>

		<Card.Root class="flex w-full items-center justify-between rounded-lg p-8 px-20 shadow-lg">
			<!-- Source -->
			<div class="flex flex-col gap-1">
				<h2 class="text-xl font-semibold">Source</h2>
				<Select.Root>
					<Select.Trigger class="h-8 min-w-40 border-2">
						<Select.Value placeholder="Choose Country" />
					</Select.Trigger>
					<Select.Content class="h-[75dvh] overflow-y-scroll">
						{#each countries as country}
							<Select.Item value={country}>{country}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>

			<!-- Desination -->
			<div class="flex flex-col gap-1">
				<h2 class="text-xl font-semibold">Destination</h2>
				<Select.Root>
					<Select.Trigger class="h-8 min-w-40 border-2">
						<Select.Value placeholder="Choose Country" />
					</Select.Trigger>
					<Select.Content class="h-[75dvh] overflow-y-scroll">
						{#each countries as country}
							<Select.Item value={country}>{country}</Select.Item>
						{/each}
					</Select.Content>
				</Select.Root>
			</div>

			<!-- Product -->
			<div class="flex flex-col gap-1">
				<h2 class="text-xl font-semibold">Product HS Code</h2>
				<Input class="h-8 border-2" placeholder="Enter HS Code" />
			</div>

			<Button class="h-14 w-28 rounded-lg">Analyze</Button>
		</Card.Root>
	</div>

	<!-- Maps and Results Sections -->
	<div class="flex h-full gap-4">
		<!-- The map -->
		<Map class="h-full w-2/3 rounded-lg border shadow-lg" apiKey={PUBLIC_MAPS_API_KEY}></Map>

		<!-- Right side results and stats section -->
		<div class="flex w-1/3 flex-col gap-4">
			<Card.Root class="h-2/3 w-full rounded-lg shadow-xl">
				<Card.Header>
					<Card.Title>Card Title</Card.Title>
					<Card.Description>Card Description</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>Card Content</p>
				</Card.Content>
				<Card.Footer>
					<p>Card Footer</p>
				</Card.Footer>
			</Card.Root>

			<Card.Root class="h-1/3 w-full rounded-lg shadow-xl">
				<Card.Header>
					<Card.Title>Card Title</Card.Title>
					<Card.Description>Card Description</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>Card Content</p>
				</Card.Content>
				<Card.Footer>
					<p>Card Footer</p>
				</Card.Footer>
			</Card.Root>
		</div>
	</div>
</div>
