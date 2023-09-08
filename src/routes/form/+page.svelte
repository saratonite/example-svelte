<script>
	import Label from '$components/Label.svelte';
	import { css } from '$styled-system/css';

	let name = '';
</script>

<Label>Form</Label>
<div>
	<form action="">
		<div>
			<input
				class={css({ borderWidth: 'thin', rounded: 'lg', p: '1', borderColor: 'gray.400' })}
				type="text"
				bind:value={name}
			/>
		</div>
	</form>
	<div>
		# Name {name}
	</div>
</div>
