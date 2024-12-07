// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8DCu8gw1jKVwijvH-pdRMbhDkjyyzMyM",
  authDomain: "simple-firebase-98d85.firebaseapp.com",
  projectId: "simple-firebase-98d85",
  storageBucket: "simple-firebase-98d85.firebasestorage.app",
  messagingSenderId: "550962200598",
  appId: "1:550962200598:web:3d81d684539e881a91b537"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;