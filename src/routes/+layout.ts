import type { LayoutLoad } from './$types';
import type { INavLink } from '$lib/types';

const links: INavLink[] = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'About',
		link: '/about'
	},
	{
		name: 'Events',
		link: '/events'
	},
	{
		name: 'Form',
		link: '/form'
	},
	{
		name: 'State',
		link: '/state'
	}
];

export const load: LayoutLoad = () => {
	return {
		links
	};
};
