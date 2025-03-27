// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQnSZy1XhzRjMStL1nSJnd8g7e-b4owgY",
  authDomain: "netflixgpt-7050e.firebaseapp.com",
  projectId: "netflixgpt-7050e",
  storageBucket: "netflixgpt-7050e.firebasestorage.app",
  messagingSenderId: "87768510670",
  appId: "1:87768510670:web:9e5f487de6ac582a99e09f",
  measurementId: "G-LZ986J5KYE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();