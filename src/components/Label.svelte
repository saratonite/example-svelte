<script lang="ts">
	import {} from 'svelte';
	import { css } from '$styled-system/css';
	export let size: 'lg' | 'xl' = 'xl';
</script>

<h1
	class={css({
		fontSize: size,
		fontWeight: 'bold'
	})}
>
	<slot />
</h1>
