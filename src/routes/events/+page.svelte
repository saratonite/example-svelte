<script lang="ts">
	import Label from '$components/Label.svelte';
	import { css } from '$styled-system/css';

	let count = 0;

	function increment() {
		count = count + 1;
	}
</script>

<Label>Events</Label>

<button
	class={css({
		backgroundColor: 'yellow.300',
		px: '3',
		py: '1',
		rounded: 'lg',
		cursor: 'pointer',
		_hover: {
			bg: 'yellow.400'
		}
	})}
	on:click={increment}>Click me</button
>
<h1>You clicked {count} times.</h1>
