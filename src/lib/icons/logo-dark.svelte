<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<SVGElement>;
</script>

<img
	src="/freix-dark-150x150.png"
	alt="Freix Logo"
	height="28"
	width="28"
	{...$$restProps}
/>
