<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Separator } from '$lib/components/ui/separator';

	import { Icons } from '$lib/icons';
	import ProfileButton from '$lib/profile/profile-button.svelte';
	import { ThemeToggleButton } from '$lib/components/theme';

	/* ******************************************************** */

	// import { page } from '$app/stores';
	// const url = $page.url;
	// let source_country = {
	// 	value: url.searchParams.get('source'),
	// 	label: url.searchParams.get('source')
	// };
	// let dest_country = { value: url.searchParams.get('dest'), label: url.searchParams.get('dest') };
	// let product_hs = url.searchParams.get('product');
</script>

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
