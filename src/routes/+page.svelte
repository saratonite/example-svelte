<script type="typescript">
	import { css } from '$styled-system/css';

	let name = 'Sarath';
</script>

<div>
	<h1
		class={css({
			fontSize: 'xl',
			fontWeight: 'bold'
		})}
	>
		Hello {name}, Welcome to home page.
	</h1>
</div>
