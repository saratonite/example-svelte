import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		let data = await event.request.formData();

		console.log('Form data ', data);

		return {
			success: true
		};
	}
} satisfies Actions;
