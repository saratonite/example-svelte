<script lang="ts">
	import Label from '$components/Label.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: peoples = data?.data?.results?.map((p: any) => {
		let _parts = p?.url?.split('/');

		let id = _parts[_parts?.length - 2];
		return {
			...p,
			id
		};
	});
</script>

<Label>Peoples</Label>

<ul>
	{#each peoples as person}
		<li>
			<a href={`/people/${person?.id}`}>
				{person.name}
			</a>
		</li>
	{/each}
</ul>
