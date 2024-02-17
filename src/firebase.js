// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZQugR0GAV0GvthNUj74UDPT5HxLVjZwo",
  authDomain: "biorganix-bliss.firebaseapp.com",
  projectId: "biorganix-bliss",
  storageBucket: "biorganix-bliss.appspot.com",
  messagingSenderId: "172480245238",
  appId: "1:172480245238:web:7adf3b6cb102c6c8de2bd7",
  measurementId: "G-PRMWXSBVLJ",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
