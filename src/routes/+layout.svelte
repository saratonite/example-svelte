<script lang="ts">
	import '../app.css';
	import { css } from '$styled-system/css';
	import { container, flex } from '$styled-system/patterns';
	import type { LayoutData } from './$types';
	import NavLink from '$components/NavLink.svelte';
	export let data: LayoutData;
</script>

<main
	class={container({
		px: '0'
	})}
>
	<header
		class={css({
			bg: 'gray.800',
			color: 'gray.300',
			px: '4',
			py: '4'
		})}
	>
		<h1 class={css({ fontSize: '4xl' })}>Example Svelte</h1>
		<nav class={css({ display: 'flex', gap: 4 })}>
			{#each data.links as link}
				<NavLink {link} />
			{/each}
		</nav>
	</header>
	<section
		class={css({
			px: '4',
			py: '4'
		})}
	>
		<slot />
	</section>
</main>
