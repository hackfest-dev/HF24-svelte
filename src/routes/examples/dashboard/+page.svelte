<script lang="ts">
	import { Activity, CreditCard, DollarSign, Download, Users } from 'lucide-svelte';
	import { Button } from '$lib/components/ui/button';
	import * as Card from '$lib/components/ui/card';
	import * as Tabs from '$lib/components/ui/tabs';
	import { DashboardMainNav, RecentSales, Search, UserNav, TeamSwitcher } from '.';
	import DatePickerWithRange from '$lib/components/ui/date-picker-with-range.svelte';
</script>

<div class="flex flex-col">
	<div class="border-b">
		<div class="flex h-16 items-center px-4">
			<TeamSwitcher />
			<DashboardMainNav class="mx-6" />
			<div class="ml-auto flex items-center space-x-4">
				<span class="hidden sm:inline-block"><Search /></span>
				<UserNav />
			</div>
		</div>
	</div>
	<div class="flex-1 space-y-4 p-8 pt-6">
		<div class="flex flex-col justify-between space-y-2 sm:flex-row">
			<h2 class="ml-1 text-3xl font-bold tracking-tight">Dashboard</h2>
			<div class="flex items-center space-x-2">
				<DatePickerWithRange />
				<Button size="sm">
					<Download class="h-4 w-4" />
					<span class="ml-2 hidden md:inline-block">Download</span>
				</Button>
			</div>
		</div>
		<Tabs.Root value="overview" class="space-y-4">
			<Tabs.List class="grid h-full grid-cols-2 sm:inline-flex">
				<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
				<Tabs.Trigger value="analytics" disabled>Analytics</Tabs.Trigger>
				<Tabs.Trigger value="reports" disabled>Reports</Tabs.Trigger>
				<Tabs.Trigger value="notifications" disabled>Notifications</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="overview" class="space-y-4">
				<div class="hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-4">
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
							<DollarSign class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">$45,231.89</div>
							<p class="text-xs text-muted-foreground">+20.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Subscriptions</Card.Title>
							<Users class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+2350</div>
							<p class="text-xs text-muted-foreground">+180.1% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Sales</Card.Title>
							<CreditCard class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+12,234</div>
							<p class="text-xs text-muted-foreground">+19% from last month</p>
						</Card.Content>
					</Card.Root>
					<Card.Root>
						<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
							<Card.Title class="text-sm font-medium">Active Now</Card.Title>
							<Activity class="h-4 w-4 text-muted-foreground" />
						</Card.Header>
						<Card.Content>
							<div class="text-2xl font-bold">+573</div>
							<p class="text-xs text-muted-foreground">+201 since last hour</p>
						</Card.Content>
					</Card.Root>
				</div>
				<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
					<Card.Root class="lg:col-span-4">
						<Card.Header>
							<Card.Title>Overview</Card.Title>
						</Card.Header>
						<Card.Content>
							<!-- <Overview /> -->
						</Card.Content>
					</Card.Root>
					<Card.Root class="overflow-x-scroll lg:col-span-3">
						<Card.Header>
							<Card.Title>Recent Sales</Card.Title>
							<Card.Description>You made 265 sales this month.</Card.Description>
						</Card.Header>
						<Card.Content>
							<RecentSales />
						</Card.Content>
					</Card.Root>
				</div>
			</Tabs.Content>
		</Tabs.Root>
	</div>
</div>
