// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsvJftVZZkDVCpp4GnOGKeN9vYUU_AdP4",
  authDomain: "capstone-2-88846.firebaseapp.com",
  projectId: "capstone-2-88846",
  storageBucket: "capstone-2-88846.firebasestorage.app",
  messagingSenderId: "850307767325",
  appId: "1:850307767325:web:50c05dbdfb9a50028b7af4",
  measurementId: "G-MWGBCCZ2V9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);