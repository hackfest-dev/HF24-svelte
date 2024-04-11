import supabase from '$lib/db/db';
import { geminiFetchInsights } from '$lib/gemini/gemini';
import { geminiFetchRoutes } from '$lib/gemini/gemini2';
import { json } from '@sveltejs/kit';
import CountryCords from '../../(nonav)/features/countryCords.json';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	console.log('Data', data);

	let [gem, gem2] = await Promise.all([
		geminiFetchInsights(data.source, data.dest, data.product),
		geminiFetchRoutes(data.source, data.dest, data.product)
	]);

	const supa = await supabase
		.from('Data')
		.select('*')
		.eq('country1', data.source)
		.eq('country2', data.dest)
		.eq('category', data.product);

	console.log('Supa', supa);

	const pathCoordinatesArray = [[{}]];

	CountryCords.forEach((ele) => {
		if (ele.name === data.source) {
			pathCoordinatesArray[0][0] = { lat: ele.lat, lng: ele.lng };
		}
		if (ele.name === data.dest) {
			pathCoordinatesArray[0][1] = { lat: ele.lat, lng: ele.lng };
		}
	});

	for (let route in gem2) {
		let arr = gem2[route];
		let new_arr: {}[] = [];
		for (let i = 0; i < arr.length; i++) {
			CountryCords.forEach((ele) => {
				if (ele.name === arr[i]) {
					new_arr.push({ lat: ele.lat, lng: ele.lng });
				}
			});
		}
		pathCoordinatesArray.push(new_arr);
		console.log(route, gem2[route]);
	}

	console.log(pathCoordinatesArray);

	return json({
		source: data.source,
		dest: data.dest,
		product: data.product,
		gem: gem,
		pathCoordinatesArray: pathCoordinatesArray,
		data: supa.data
	});
};
