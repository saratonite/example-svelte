<script lang="ts">
	import type { PageData } from './$types';
	import Label from '$components/Label.svelte';

	export let data: PageData;

	$: person = data?.data;
</script>

<Label>{person?.name}</Label>

