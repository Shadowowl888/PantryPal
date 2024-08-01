// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6B9AIovrIW6ytCTt179IQpzuBEyQ4Ex4",
  authDomain: "pantrypal-c6b85.firebaseapp.com",
  projectId: "pantrypal-c6b85",
  storageBucket: "pantrypal-c6b85.appspot.com",
  messagingSenderId: "841673327924",
  appId: "1:841673327924:web:e344708510b27e86be1161",
  measurementId: "G-M684X0JBDQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { analytics, auth, firestore };