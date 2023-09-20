import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyB_wtqaaPxIAomR7yBO5rSiIcz6KFjtK0k',
  authDomain: 'disaster-app-788a3.firebaseapp.com',
  projectId: 'disaster-app-788a3',
  storageBucket: 'disaster-app-788a3.appspot.com',
  messagingSenderId: '531940918693',
  appId: '1:531940918693:web:50dc0a8488627e0d67544c',
  measurementId: 'G-SFCQ6G0FH0',
};

const app = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(app);
