// reference: https://stackoverflow.com/questions/4825683/how-do-i-create-and-read-a-value-from-cookie-with-javascript

import { get, readable } from 'svelte/store';
import { user } from '$lib/firebase/firebase';
import { signInServerOnly } from './signin';

/**
 * @returns a store with which calls update function every `interval` milliseconds
 */
export function updater(
	update: () => boolean,
	options: { interval?: number } = { interval: 1000 }
) {
	const initialValue = update();

	return readable(initialValue, (set) => {
		const interval = setInterval(() => {
			set(update());
		}, options.interval || 1000);

		// return a cleanup function:
		return () => clearInterval(interval);
	});
}

const getCookie = (name) => {
	return document.cookie.split('; ').reduce((r, v) => {
		const parts = v.split('=');
		return parts[0] === name ? decodeURIComponent(parts[1]) : r;
	}, '');
};

/**
 * @returns boolean indicating if the user is signed in on the server
 */
export function serverSigninCheck() {
	if (!globalThis.window) {
		return false;
	}
	const signedIn = getCookie('signedIn') === 'true';
	// console.log('The server signedIn status is :', signedIn);

	// The drawback of the below code is that it will sign out the user
	// from the server if the user is signed in but the user store is not updated yet
	// if (signedIn && !get(user)) {
	// 	signOutServerOnly();
	// }

	if (!signedIn && get(user)) {
		signInServerOnly();
	}

	return signedIn || false;
}

/**
 * store with the server signin status of the user updated every 3 seconds
 */
export const serverSigninStore = updater(serverSigninCheck, { interval: 3000 });
