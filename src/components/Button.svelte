<script lang="ts">
	import { css } from '$styled-system/css';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	interface $$Props extends HTMLButtonAttributes {}
</script>

<button
	{...$$restProps}
	on:click
	class={css({
		bg: 'yellow.300',
		color: 'gray.700',
		px: '3',
		py: '1',
		rounded: 'lg',
		cursor: 'pointer',
		fontWeight: 'semibold',
		_hover: {
			bg: 'yellow.400'
		},
		_disabled: {
			bg: 'yellow.200',
			cursor: 'not-allowed',
			_hover: {
				bg: 'yellow.200'
			}
		}
	})}><slot /></button
>
