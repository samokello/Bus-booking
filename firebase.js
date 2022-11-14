// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFiopc7JGOjwNHYdGZNQjjNB6phcmLKTI",
  authDomain: "bus-booking-a86d8.firebaseapp.com",
  projectId: "bus-booking-a86d8",
  storageBucket: "bus-booking-a86d8.appspot.com",
  messagingSenderId: "507801549520",
  appId: "1:507801549520:web:81340879abda34ab30bcd5",
  measurementId: "G-85QBDFQX63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider(app);
export const auth = getAuth(app);
// // Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage();