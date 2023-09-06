<script lang="ts">
	import { css } from '$styled-system/css';
	import type { PageData } from './$types';

	let name = 'Sarath';
	export let data: PageData;
</script>

<div>
	<h1
		class={css({
			fontSize: 'xl',
			fontWeight: 'bold'
		})}
	>
		Hello {name}, {data.message}
	</h1>

	<nav>
		<ul>
			{#each Object.keys(data.data) as item}
				<li class={css({ textTransform: 'capitalize', color: 'indigo.600' })}>
					<a href={`/${item}`}>
						{item}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
