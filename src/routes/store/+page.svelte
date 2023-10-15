<script lang="ts">
	import { onDestroy } from 'svelte';
	import Label from '$components/Label.svelte';
	import Button from '$components/Button.svelte';
	import { sampleData } from '$src/stores/sample-store';

	let message = '';

	let unsubscribe = sampleData.subscribe((v) => (message = v));

	onDestroy(unsubscribe);
</script>

<Label>Store</Label>

<p>{message}</p>

<Button
	on:click={() => {
		let _v = prompt('Enter something: ');
		sampleData.update((v) => `${v} + ${_v}`);
	}}>Update</Button
>

<Button
	on:click={() => {
		let v = prompt('Enter something: ');
		if (v) {
			sampleData.set(v);
		}
	}}>Set</Button
>

<Button on:click={() => sampleData.set('')}>Clear</Button>
