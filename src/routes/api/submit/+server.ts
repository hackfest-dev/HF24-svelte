import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { geminiFetchInsights } from '$lib/gemini/gemini';
import CountryCords from '../../(nonav)/features/countryCords.json';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	// console.log(data);

	let gem = await geminiFetchInsights(data.source, data.dest, data.product);

	const pathCoordinatesArray = [
		[{}]
	];

	CountryCords.forEach((ele) => {
		if (ele.name === data.source) {
			pathCoordinatesArray[0][0] = { lat: ele.lat, lng: ele.lng }
		}
		if (ele.name === data.dest) {
			pathCoordinatesArray[0][1] = { lat: ele.lat, lng: ele.lng}
		}
	});

	return json({
		source: data.source,
		dest: data.dest,
		product: data.product,
		gem: gem,
		pathCoordinatesArray: pathCoordinatesArray
	});
};
