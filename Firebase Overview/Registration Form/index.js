import { auth, onAuthStateChanged, signOut } from "./firebase.js";

let name = document.getElementById("name");
let logout = document.getElementById("logout");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    name.innerText = `Welcome to ${user.email}`;
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("ha bhai");
    // ...
  } else {
    // User is signed out
    console.log("User is signed out");
    window.location.href = "./Register/register.html";
    // ...
  }
});

logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Sign-out successful.");
    })
    .catch((error) => {
      alert("An error happened. ", error);
    });
});
