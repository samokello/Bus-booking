import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBFiopc7JGOjwNHYdGZNQjjNB6phcmLKTI",
	authDomain: "bus-booking-a86d8.firebaseapp.com",
	projectId: "bus-booking-a86d8",
	storageBucket: "bus-booking-a86d8.appspot.com",
	messagingSenderId: "507801549520",
	appId: "1:507801549520:web:81340879abda34ab30bcd5",
	measurementId: "G-85QBDFQX63",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase };
