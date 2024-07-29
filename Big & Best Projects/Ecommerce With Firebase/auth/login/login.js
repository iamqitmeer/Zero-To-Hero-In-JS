import { auth, doc, signInWithEmailAndPassword } from "../../utils/firebase.js";

// Get Element From "login.html"
let email = document.getElementById("email");
let password = document.getElementById("password");
let login = document.getElementById("login");

login.addEventListener("click", () => {
  login.innerText = "Loading...";
  login.disabled = true;
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Yes! you are logged in our web page");

      login.innerText = "Sign in";
      login.disabled = false;
      window.location.href = "../../index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(`Error-${errorCode}, while logged your account`);

      login.innerText = "Sign in";
      login.disabled = false;
    });
});
