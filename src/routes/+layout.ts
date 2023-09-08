import type { PageLoad } from './$types';
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
	}
];

export const load: PageLoad = () => {
	return {
		links
	};
};
