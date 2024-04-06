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

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(formSchema));

		if (!form.valid) {
			return fail(400, {
				form
			});
		}

		console.log('form.data', form.data);

		geminiFetchInsights(form.data.source, form.data.dest, form.data.product);

		return {
			form
		};
	}
};
