import { getResourceItem } from '$lib/sw';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params }) => {
	let data = await  getResourceItem('people', params?.id);
	return {
		data
	};
};
