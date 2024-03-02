// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn_xgvTxggbWwSQTc62ObS1r0LYoh7oQ4",
  authDomain: "vite-contact-7185b.firebaseapp.com",
  projectId: "vite-contact-7185b",
  storageBucket: "vite-contact-7185b.appspot.com",
  messagingSenderId: "83138421132",
  appId: "1:83138421132:web:caf9a5af715d52891bb6a9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)