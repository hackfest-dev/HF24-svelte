import { adminAuth } from '$lib/server/admin';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	// console.log('Sveltekit serverside hook called');
	const sessionCookie = event.cookies.get('__session');

	try {
		const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!);
		event.locals.userID = decodedClaims.uid;
	} catch (e) {
		console.error('Error verifying session cookie:', e);
		event.cookies.set('signedIn', 'false', { httpOnly: false, path: '/' });
		event.locals.userID = null;
		return resolve(event);
	}

	return resolve(event);
}) satisfies Handle;
