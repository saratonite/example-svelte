<script lang="ts">
	import Button from '$components/Button.svelte';
	import Label from '$components/Label.svelte';
	import { css } from '$styled-system/css';
	import type { ActionData } from './$types';

	let name = '';

	export let form: ActionData;
</script>

<Label>Form</Label>
<div>
	{#if form?.success}
		<p
			class={css({
				bg: 'green.300',
				py: '2',
				px: 2,
				mb: '4',
				color: 'white',
				fontWeight: 'bold',
				rounded: 'lg'
			})}
		>
			Success
		</p>
	{/if}

	<form method="post" class={css({ display: 'flex', flexDirection: 'column', gap: 4 })}>
		<div>
			<input
				name="name"
				class={css({ borderWidth: 'thin', rounded: 'lg', p: '1', borderColor: 'gray.400' })}
				type="text"
				bind:value={name}
			/>
		</div>
		<div>
			<input
				name="email"
				class={css({ borderWidth: 'thin', rounded: 'lg', p: '1', borderColor: 'gray.400' })}
				type="email"
			/>
		</div>

		<div>
			<Button>Submit</Button>
		</div>
	</form>
</div>
