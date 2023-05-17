// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey:
		'AIzaSyAGBcY0T1LYlocYsv2zOl7S4TPk9j71Mqk',
	authDomain: 'diplomacy-1.firebaseapp.com',
	projectId: 'diplomacy-1',
	storageBucket: 'diplomacy-1.appspot.com',
	messagingSenderId: '507351872943',
	appId:
		'1:507351872943:web:39c712e987787ccb4f2b5a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
