import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('This is from hooks.server.ts');
	if (event.url.pathname.startsWith('/custom')) {
		return new Response('custom response');
	}
	const response = resolve(event);

	return response;
};
