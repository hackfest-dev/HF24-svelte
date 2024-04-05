import type { PageServerLoad, Actions } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { formSchema } from './schema';
import { adminAuth, adminDB } from '$lib/server/admin';
import { error, fail, redirect } from '@sveltejs/kit';

export const load = (async ({ locals }) => {
	const uid = locals.userID;

	if (!uid) {
		// throw redirect(301, '/login');
		throw error(401, "You're not logged in");
	}

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

		const uid = event.locals.userID;

		if (!uid) {
			return fail(400, { problem: 'Error: Please relogin and try again.' });
		}

		const userRef = adminDB.collection('user').doc(uid!);

		console.log('form.data', form.data);

		const status = await userRef.set({
			...form.data
		});

		console.log('status', status);
	}
};
