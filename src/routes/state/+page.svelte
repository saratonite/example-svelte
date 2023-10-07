<script lang="ts">
	import Button from '$components/Button.svelte';
</script>

<h1>State</h1>
<Button
	on:click={() => {
		alert('Hoo');
	}}>Hello</Button
>
