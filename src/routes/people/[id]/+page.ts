import { getResourceItem } from '$lib/sw';
import type { PageLoad } from './$types';
export const load: PageLoad = async ({ params }) => {
	let data = getResourceItem('people', params?.id);

	return {
		data
	};
};
