import { auth,onAuthStateChanged } from "./firebase.js";

let name = document.getElementById("name")

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        name.innerText = `Welcome to ${user.email}`
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      console.log("ha bhai");
      // window.location.href = "./index.html"
      // ...
    } else {
      // User is signed out
      console.log("User is signed out");
      // window.location.href = "/Register/register.html"
      // ...
    }
  });