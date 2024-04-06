import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { geminiFetchInsights } from '$lib/gemini/gemini';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	// console.log(data);

	let gem = await geminiFetchInsights(data.source, data.dest, data.product);

	const pathCoordinates = [
		{ lat: 22.351, lng: 78.667 },
		{ lat: 46.85, lng: 103.284 },
		{ lat: 36.2, lng: 138.25 }
	];

	return json({
		source: data.source,
		dest: data.dest,
		product: data.product,
		gem: gem,
		pathCoordinates: pathCoordinates
	});
};
