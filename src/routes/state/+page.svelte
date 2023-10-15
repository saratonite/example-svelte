<script lang="ts">
	import Button from '$components/Button.svelte';
	import Label from '$components/Label.svelte';
</script>

<Label>State</Label>
<Button
	on:click={() => {
		alert('Hoo');
	}}>Hello</Button
>
