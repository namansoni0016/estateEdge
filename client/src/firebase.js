// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "estate-edge-8e76e.firebaseapp.com",
    projectId: "estate-edge-8e76e",
    storageBucket: "estate-edge-8e76e.appspot.com",
    messagingSenderId: "173422751296",
    appId: "1:173422751296:web:75b9d3fae7980794f2f9a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);