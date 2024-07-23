// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// Register Elements

let register_fullName = document.getElementById("register_fullName");
let register_email = document.getElementById("register_email");
let register_password = document.getElementById("register_password");
let register_btn = document.getElementById("register_btn");

// LogIn Elements

let login_password = document.getElementById("login_password");
let login_email = document.getElementById("login_email");
let login_btn = document.getElementById("login_btn");

// page

let logout = document.getElementById("logout");
let userName = document.getElementById("userName");

// Container

let page = document.getElementById("page");
let register = document.getElementById("register");
let login = document.getElementById("login");

// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzuCSwq5VI87QQbdf6uGX7jOL807rxWpI",
  authDomain: "first-app-c27ab.firebaseapp.com",
  projectId: "first-app-c27ab",
  storageBucket: "first-app-c27ab.appspot.com",
  messagingSenderId: "90390319356",
  appId: "1:90390319356:web:bf7a42be35db4f5677c779",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
console.log("auth -->", auth);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Logged In");
    register.style.display = "none";
    login.style.display = "block";
    const uid = user.uid;
  } else {
    console.log("Logged Not In");
    register.style.display = "block";
    login.style.display = "none";
  }
});

register_btn.addEventListener("click", () => {
  createUserWithEmailAndPassword(
    auth,
    register_email.value,
    register_password.value,
    register_fullName.value
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
});

// LogIn

login_btn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, login_email.value, login_password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Success ---> ", user);


      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Sign-out successful.");
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
});
