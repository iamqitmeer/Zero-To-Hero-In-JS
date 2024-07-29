// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVOcC6bjgBb6wfXRtVB2Iwg6AMYg8uTjI",
  authDomain: "ecommerce-with-javascript.firebaseapp.com",
  projectId: "ecommerce-with-javascript",
  storageBucket: "ecommerce-with-javascript.appspot.com",
  messagingSenderId: "1086071636259",
  appId: "1:1086071636259:web:dde0eb7c1cfe757a234c96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const docRef = doc(db, "products", "SF");
const docSnap = await getDoc(docRef);

console.log(docSnap);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

export {
  db,
  collection,
  addDoc,
  storage,
  uploadBytes,
  ref,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  getDoc,
  signOut,
  onAuthStateChanged,
  getDownloadURL,
  uploadBytesResumable,
};
