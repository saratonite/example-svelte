<script lang="ts">
	import type { INavLink } from '$lib/types';
	import { css } from '$styled-system/css';
	export let link: INavLink;
</script>

<a
	href={link?.link}
	class={css({
		fontWeight: 'bold',
		bg: 'gray.700',
		px: 4,
		py: 1,
		rounded: '3xl',
		_hover: { bg: 'yellow.400', color: 'gray.900' },
		_active: { bg: 'yellow.500' }
	})}>{link?.name}</a
>
