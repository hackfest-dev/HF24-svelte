import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';
import { error, fail, redirect } from '@sveltejs/kit';
import { geminiFetchInsights } from '$lib/gemini/gemini';

export const load = (async () => {
	return {
		form: await superValidate(zod(formSchema))
	};
}) satisfies PageServerLoad;

// export const actions: Actions = {
// 	default: async (event) => {
// 		console.log('Event', event.request);
// 		const form = await superValidate(event, zod(formSchema));

// 		if (!form.valid) {
// 			return fail(400, {
// 				form
// 			});
// 		}

// 		//geminiFetchInsights(form.data.source, form.data.dest, form.data.product);

// 		// const pathCoordinates = [
// 		// 	{ lat: 22.351, lng: 78.667 },
// 		// 	{ lat: 46.85, lng: 103.284 },
// 		// 	{ lat: 36.2, lng: 138.25 }
// 		// ];

// 		// const queryParams = pathCoordinates
// 		// 	.map((obj) =>
// 		// 		Object.entries(obj)
// 		// 			.map(([key, value]) => `${key}=${value}`)
// 		// 			.join('&')
// 		// 	)
// 		// 	.join('&');

// 		return redirect(302, `/features/?${queryParams}`);
// 	}
// };
