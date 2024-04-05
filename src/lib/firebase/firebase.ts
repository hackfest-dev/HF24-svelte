// Import the functions you need from the SDKs you need
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { deleteApp, getApp, getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// import { getAnalytics } from 'firebase/analytics';

import { doc, getFirestore, onSnapshot } from 'firebase/firestore';
import { derived, writable, type Readable } from 'svelte/store';

const firebaseConfig = {
	apiKey: 'AIzaSyB3NSkw9x615PJdg8B8_bRSXjAz8ZEfsI0',
	authDomain: 'hackfest-svelte.firebaseapp.com',
	projectId: 'hackfest-svelte',
	storageBucket: 'hackfest-svelte.appspot.com',
	messagingSenderId: '74609721947',
	appId: '1:74609721947:web:36efe6415fcb247b32f57e',
	measurementId: 'G-STR9JGE8TY'
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
let app: FirebaseApp;
if (!getApps().length) {
	app = initializeApp(firebaseConfig);
} else {
	app = getApp();
	deleteApp(app);
	app = initializeApp(firebaseConfig);
}

export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();

// Fix the error when analytics is initialized
// export const analytics = getAnalytics(app);

/* ************************************************************************** */

/**
 * @returns a store with the current firebase user
 */
function userStore() {
	let unsubscribe: () => void;

	if (!auth || !globalThis.window) {
		console.warn('Not in browser or Firebase Auth function is not initialized');
		const { subscribe } = writable<User | null>(null);
		return {
			subscribe
		};
	}

	const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
		unsubscribe = onAuthStateChanged(auth, (user) => {
			set(user);
		});

		return () => unsubscribe();
	});

	return {
		subscribe
	};
}

export const user = userStore();

/* ************************************************************************** */

/**
 * @param  {string} path document path or reference
 * @param  {any} startWith optional default data
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(path: string) {
	let unsubscribe: () => void;

	const docRef = doc(db, path);

	const { subscribe } = writable<T | null>(null, (set) => {
		unsubscribe = onSnapshot(docRef, (snapshot) => {
			set((snapshot.data() as T) ?? null);
		});

		return () => unsubscribe();
	});

	return {
		subscribe,
		ref: docRef,
		id: docRef.id
	};
}

/* ************************************************************************** */

interface UserData {
	name: string;
	phone: string;
	email: string;
	team: string;
}

export const userData: Readable<UserData | null> = derived(user, ($user, set) => {
	if ($user) {
		return docStore<UserData>(`user/${$user.uid}`).subscribe(set);
	} else {
		set(null);
	}
});

/* ************************************************************************** */
