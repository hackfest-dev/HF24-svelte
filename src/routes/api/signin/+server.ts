import { adminAuth } from '$lib/server/admin';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// console.log('1 receieved post request');

	const { idToken } = await request.json();
	// console.log('2 json parsed');

	const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
	const decodedIdToken = await adminAuth.verifyIdToken(idToken);
	// console.log('3 verified token');

	if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
		const cookie = await adminAuth.createSessionCookie(idToken, { expiresIn });
		const options = { maxAge: expiresIn, httpOnly: true, secure: true, path: '/' };
		cookies.set('__session', cookie, options);
		cookies.set('signedIn', 'true', { httpOnly: false, path: '/' });

		// console.log('4 cookie set');
		return json({ status: 'signedIn' });
	} else {
		throw error(401, 'Recent sign in required!');
	}
};

export const DELETE: RequestHandler = async ({ cookies }) => {
	cookies.delete('__session', { path: '/' });
	cookies.set('signedIn', 'false', { httpOnly: false, path: '/' });
	return json({ status: 'signedOut' });
};
