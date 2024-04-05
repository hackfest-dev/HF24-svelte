import { auth, user } from '$lib/firebase/firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { get } from 'svelte/store';

export async function signInWithGoogle() {
	const provider = new GoogleAuthProvider();
	const credential = await signInWithPopup(auth, provider);

	const idToken = await credential.user.getIdToken();
	const res = await fetch('/api/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
			// 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
		},
		body: JSON.stringify({ idToken })
	});

	if (!res.ok) {
		throw new Error('Internal Server Error - failed to authenticate in server');
	}

	const data = await res.json();
	console.log('Authenticated at server', data);
	return data;
}

export async function signInServerOnly() {
	if (!globalThis.window) {
		return;
	}
	const idToken = await get(user).getIdToken();

	if (!idToken) {
		console.log("User's idToken is not available");
		return;
	}

	const res = await fetch('/api/signin', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
			// 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
		},
		body: JSON.stringify({ idToken })
	});

	if (!res.ok) {
		throw new Error('Internal Server Error - failed to authenticate in server');
	}

	const data = await res.json();
	console.log('Authenticated at server', data);
	return data;
}

export async function signOutSSR() {
	const res = await fetch('/api/signin', { method: 'DELETE' });
	await signOut(auth);

	if (!res.ok) {
		throw new Error('Internal Server Error - failed to sign out');
	}

	const data = await res.json();
	console.log('Deleted authentication (__session) cookie', data);
	return data;
}

export async function signOutServerOnly() {
	const res = await fetch('/api/signin', { method: 'DELETE' });

	if (!res.ok) {
		throw new Error('Internal Server Error - failed to sign out');
	}

	const data = await res.json();
	console.log('Deleted authentication (__session) cookie', data);
	return data;
}
