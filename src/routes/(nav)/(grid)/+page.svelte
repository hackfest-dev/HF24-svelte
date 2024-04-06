<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import * as Select from '$lib/components/ui/select';
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
				<Select.Root>
					<Select.Trigger
						class="h-16 w-full max-w-md justify-center gap-x-2 rounded-full border-2 text-lg"
					>
						<Select.Value placeholder="Source" />
					</Select.Trigger>
					<Select.Content class="mt-2 rounded-lg">
						<Select.Item value="light">Light</Select.Item>
						<Select.Item value="dark">Dark</Select.Item>
						<Select.Item value="system">System</Select.Item>
					</Select.Content>
				</Select.Root>
				<Select.Root>
					<Select.Trigger
						class="h-16 w-full max-w-md justify-center gap-x-2 rounded-full border-2 text-lg"
					>
						<Select.Value placeholder="Destination" />
					</Select.Trigger>
					<Select.Content class="mt-2 rounded-lg">
						<Select.Item value="light">Light</Select.Item>
						<Select.Item value="dark">Dark</Select.Item>
						<Select.Item value="system">System</Select.Item>
					</Select.Content>
				</Select.Root>

				<Select.Root>
					<Select.Trigger
						class="h-16 w-full max-w-md justify-center gap-x-2 rounded-full border-2 text-lg"
					>
						<Select.Value placeholder="Product HS" />
					</Select.Trigger>
					<Select.Content class="mt-2 rounded-lg">
						<Select.Item value="light">Light</Select.Item>
						<Select.Item value="dark">Dark</Select.Item>
						<Select.Item value="system">System</Select.Item>
					</Select.Content>
				</Select.Root>
			</div>
			<Button class="mx-auto w-2/3">Submit</Button>
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
