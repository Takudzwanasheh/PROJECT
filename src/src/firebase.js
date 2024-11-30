import 'firebase/auth';
import 'firebase/firestore';
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTBdjJ2F6orjVzSWV_0aN-KjBCECxYj44",
  authDomain: "uz-internship-tracker.firebaseapp.com",
  databaseURL: "https://uz-internship-tracker-default-rtdb.firebaseio.com",
  projectId: "uz-internship-tracker",
  storageBucket: "uz-internship-tracker.firebasestorage.app",
  messagingSenderId: "929547808072",
  appId: "1:929547808072:web:e2c1d5e5f4e89ba735577d",
  measurementId: "G-3YJY19R3D9"
};

firebase.initialiseApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();