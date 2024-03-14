// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAiimLD7GSRHjP4p8_D2-6K_RlMFgO41l0",
    authDomain: "shopp-d4b94.firebaseapp.com",
    projectId: "shopp-d4b94",
    storageBucket: "shopp-d4b94.appspot.com",
    messagingSenderId: "1065000722293",
    appId: "1:1065000722293:web:b41037272df0b1e92dbd3c",
    measurementId: "G-ZD1YVEW631"
  };  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;