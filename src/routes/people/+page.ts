import { listResource } from '$lib/sw';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	let data = await listResource('people');

	return {
		data
	};
};
