<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<SVGElement>;
</script>

<img src="/freix-150x150.png" alt="Freix Logo" height="32" width="32" {...$$restProps} />
