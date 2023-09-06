import type { PageLoad } from './$types';
import { rootResources } from '$lib/sw';

export const load: PageLoad = async ({}) => {
	const data = await rootResources();

	return {
		message: 'Welcome to home page',
		data
	};
};
