<script>
	import { theme } from '$lib/stores';
	import { browser } from '$app/environment';
	import { onDestroy } from 'svelte';

	export let label = 'Dark mode';

	function toggle() {
		const upcoming_theme = $theme.current === 'light' ? 'dark' : 'light';

		if (
			upcoming_theme ===
			(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
		) {
			// Switch the preference to `system`
			$theme.preference = 'system';
		} else {
			// Switch the preference to `light` or `dark`
			$theme.preference = upcoming_theme;
		}

		$theme.current = upcoming_theme;
	}

	/** @param {MediaQueryListEvent} e */
	const cb = (e) =>
		theme.set({ preference: $theme.preference, current: e.matches ? 'dark' : 'light' });

	/** @type {MediaQueryList} */
	let query;

	$: {
		if (!browser) break $;

		query?.removeEventListener('change', cb);

		if ($theme.preference === 'system') {
			query = window.matchMedia('(prefers-color-scheme: dark)');
			query.addEventListener('change', cb);
		}
	}

	onDestroy(() => query?.removeEventListener('change', cb));
</script>

<button
	id="theme-toggle"
	type="button"
	on:click={toggle}
	aria-pressed={$theme.current === 'dark' ? 'true' : 'false'}
	aria-label={label}
>
	{#if browser}
		{#if $theme.current === 'dark'}
			<svg
				class="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg
			>
		{:else}
			<svg
				class="h-5 w-5"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
					fill-rule="evenodd"
					clip-rule="evenodd"
				/></svg
			>
		{/if}
	{/if}
</button>

<style lang="postcss">
	button {
		position: relative;
		display: block;
		flex-shrink: 0;
		transition: border-color 0.25s;
		@apply flex aspect-square items-center rounded-lg p-1.5 text-sm;
		@apply border border-border;
	}

	button:hover {
		@apply bg-secondary;
	}
</style>
