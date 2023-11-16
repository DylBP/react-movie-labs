// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAm9TrGqfVnIP3NBI76gSBAUl_TbODMTyo",
  authDomain: "wad2-firebase-auth.firebaseapp.com",
  projectId: "wad2-firebase-auth",
  storageBucket: "wad2-firebase-auth.appspot.com",
  messagingSenderId: "247157118296",
  appId: "1:247157118296:web:8bd7cb19c9d2b190aac12d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
