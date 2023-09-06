const BASE_URL = 'https://swapi.dev/api/';

export async function rootResources() {
	let res = await fetch(BASE_URL);
	let data = res.json();

	return data;
}

export async function listResource(resource: string) {
	let res = await fetch(`${BASE_URL}${resource}`);
	let data = await res.json();

	return data;
}

export async function getResourceItem(resource: string, id: string) {
	let res = await fetch(`${BASE_URL}${resource}/${id}`);
	let data = await res.json();

	return data;
}

export function getID(url: string) {
	let _parts = url?.split('/');
	let id = _parts[_parts?.length - 2];
	return id;
}
