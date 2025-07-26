// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_5luxgLNGwYAtYUVKEkf0Ird0R7HiyGY",
  authDomain: "realestateproject-3f770.firebaseapp.com",
  projectId: "realestateproject-3f770",
  storageBucket: "realestateproject-3f770.firebasestorage.app",
  messagingSenderId: "329854441901",
  appId: "1:329854441901:web:fefe31dd51b83a46f1a924",
  measurementId: "G-P99288K0DE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };