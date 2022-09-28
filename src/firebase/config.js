import firebase from "firebase/compat/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBG1GIo4biKgx4lHB_f9h7753EecQipTkE",
    authDomain: "bus-lite.firebaseapp.com",
    projectId: "bus-lite",
    storageBucket: "bus-lite.appspot.com",
    messagingSenderId: "214806855505",
    appId: "1:214806855505:web:574e62e2d444f514ee9d70",
    measurementId: "G-RPTBCWMXMC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };