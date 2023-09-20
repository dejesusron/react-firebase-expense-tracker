// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJJcBdHcQSbaFtJZfC6QdnsW5_uzCt8Uw",
  authDomain: "expense-tracker-111cb.firebaseapp.com",
  projectId: "expense-tracker-111cb",
  storageBucket: "expense-tracker-111cb.appspot.com",
  messagingSenderId: "707664480878",
  appId: "1:707664480878:web:1e3bc7d29483151a67347f",
  measurementId: "G-TKELXR7Z39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);