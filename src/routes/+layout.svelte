<script>
	import '../app.css';
	import { css } from '$styled-system/css';
	import { container, flex } from '$styled-system/patterns';
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
		<nav>
			<a href="/">Home</a>
			<a href="/about">About</a>
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
