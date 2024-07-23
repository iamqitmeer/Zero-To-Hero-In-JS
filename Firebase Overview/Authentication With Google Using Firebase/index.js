import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1OWTw-sz0N6seTvkn3X4zE8-Be_8EVw4",
  authDomain: "learn--auth-5791e.firebaseapp.com",
  projectId: "learn--auth-5791e",
  storageBucket: "learn--auth-5791e.appspot.com",
  messagingSenderId: "358280106068",
  appId: "1:358280106068:web:0012517d19b23824415dc1",
  measurementId: "G-PDFZRD2TQV",
};

const registerWithGoogle = document.getElementById("registerWithGoogle");

registerWithGithub
const loggedInPage = document.getElementById("loggedInPage");
const page = document.getElementById("page");
let logout = document.getElementById("logout");
const userName = document.getElementById("userName");

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(app);

const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();

auth.languageCode = "en";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    loggedInPage.style.display = "none";
    page.style.display = "block";
    console.log("logged In --> ", user);
    let displayName = user.displayName.split(" ");

    userName.innerText += " " + displayName[0];
    // ...
  } else {
    // User is signed out
    // ...
    loggedInPage.style.display = "block";
    page.style.display = "none";
  }
});

registerWithGoogle.addEventListener("click", googleAuthFun);

function googleAuthFun() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result;
      console.log("user -->" + user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      // ...
    });
}

registerWithGithub.addEventListener("click", githubAuthFun);

function githubAuthFun() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result;
      console.log("user -->" + user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      alert(errorMessage);
      // ...
    });
}

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
