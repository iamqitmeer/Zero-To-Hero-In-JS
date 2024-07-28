// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,onAuthStateChanged ,
  createUserWithEmailAndPassword,signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxNQydNEoJ72n58OX-maIdxg0VrmmMrRs",
  authDomain: "registration-form-44c85.firebaseapp.com",
  projectId: "registration-form-44c85",
  storageBucket: "registration-form-44c85.appspot.com",
  messagingSenderId: "786073004740",
  appId: "1:786073004740:web:5e55318036a9bac1bbb791",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged};