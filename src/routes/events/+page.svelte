<script lang="ts">
	import Label from '$components/Label.svelte';
	import Counter from '$components/Counter.svelte';
</script>

<Label>Events</Label>

<Counter
	on:count={(event) => {
		console.log(event);
	}}
/>
