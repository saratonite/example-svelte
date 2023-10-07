<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '$components/Button.svelte';

	let count = 0;

	const dispatch = createEventDispatcher();

	function increment() {
		count = count + 1;

		dispatch('count', { count });
	}
</script>

<Button on:click={increment}>Click me</Button>
<h1>You clicked {count} times.</h1>
