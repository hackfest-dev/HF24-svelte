import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { geminiFetchInsights } from '$lib/gemini/gemini';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	// console.log(data);

	let gem = await geminiFetchInsights(data.source, data.dest, data.product);
	

	const pathCoordinatesArray = [
		[
			{ lat: 22.351, lng: 78.667 },
			{ lat: 36.2, lng: 138.25 }
		],
		[
			{ lat: 89.351, lng: 118.667 },
			{ lat: 4.85, lng: 73.284 },
			{ lat: 83.2, lng: 13.25 }
		],
		[
			{ lat: 39.351, lng: 46.667 },
			{ lat: 6.85, lng: 133.284 },
			{ lat: 44.2, lng: 88.25 }
		]
	];

	return json({
		source: data.source,
		dest: data.dest,
		product: data.product,
		gem: gem,
		pathCoordinatesArray: pathCoordinatesArray
	});
};
