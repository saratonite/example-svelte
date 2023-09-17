import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		let data = await event.request.formData();

		let item = {
			name: data.get('name'),
			email: data.get('email')
		};
		return {
			success: true,
			item
		};
	}
} satisfies Actions;
