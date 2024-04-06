import supabase from '$lib/db/db';
import { geminiFetchInsights } from '$lib/gemini/gemini';
import { json } from '@sveltejs/kit';
import CountryCords from '../../(nonav)/features/countryCords.json';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const dataMain = await request.json();
	// console.log(data);

	const gem = await geminiFetchInsights(dataMain.source, dataMain.dest, dataMain.product);

	console.log(dataMain);
	const { data } = await supabase
		.from('Data')
		.select('*')
		.eq('country1', dataMain.source)
		.eq('country2', dataMain.dest)
		.eq('category', dataMain.product);

	// console.log(data);

	const pathCoordinatesArray = [[{}]];

	CountryCords.forEach((ele) => {
		if (ele.name === data.source) {
			pathCoordinatesArray[0][0] = { lat: ele.lat, lng: ele.lng };
		}
		if (ele.name === data.dest) {
			pathCoordinatesArray[0][1] = { lat: ele.lat, lng: ele.lng };
		}
	});

	return json({
		source: dataMain.source,
		dest: dataMain.dest,
		product: dataMain.product,
		gem: gem,
		pathCoordinatesArray: pathCoordinatesArray,
		data: data
	});
};
