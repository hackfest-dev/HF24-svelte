import type { PageLoad } from './$types';

/** @type {import('./$types').PageLoad} */
export const load = (async ({ params, url }) => {
	const source = url.searchParams.get('source');
	const dest = url.searchParams.get('dest');
	const product = url.searchParams.get('product');
	const qp = url.searchParams.get('qp');

	let zodData = {
		source: '',
		dest: '',
		product: '',
		pathCoordinatesArray: [[]],
		gem: '',
		qp: '',
		data: {}
	};

	zodData.source = source ?? '';
	zodData.dest = dest ?? '';
	zodData.product = product ?? '';
	zodData.qp = qp ?? '';

	console.log('asdfasdfasdf', JSON.stringify(zodData));

	return {
		form: {
			...zodData
		}
	};
}) satisfies PageLoad;
