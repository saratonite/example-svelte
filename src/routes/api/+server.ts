import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	return json({
		message: 'Get list of items'
	});
};

export const POST: RequestHandler = () => {
	return json({
		message: 'Item created'
	});
};
