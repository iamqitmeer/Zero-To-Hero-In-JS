import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  doc,
  setDoc,
  collection,getDocs,
  addDoc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAVOcC6bjgBb6wfXRtVB2Iwg6AMYg8uTjI",
  authDomain: "ecommerce-with-javascript.firebaseapp.com",
  projectId: "ecommerce-with-javascript",
  storageBucket: "ecommerce-with-javascript.appspot.com",
  messagingSenderId: "1086071636259",
  appId: "1:1086071636259:web:dde0eb7c1cfe757a234c96",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

const db = getFirestore(app);

export {
  db,
  doc,
  setDoc,
  getDoc,
  auth,
  ref,
  uploadBytes,
  getDownloadURL,
  onAuthStateChanged,
  collection,
  addDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,getDocs,
  storage,
  signOut,
};
