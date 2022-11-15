// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3ypViPl624DSPWf3DtuQDT646nMWzrKA",
    authDomain: "fruits-panda.firebaseapp.com",
    projectId: "fruits-panda",
    storageBucket: "fruits-panda.appspot.com",
    messagingSenderId: "712643124789",
    appId: "1:712643124789:web:a4424457229cfb00941b7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;