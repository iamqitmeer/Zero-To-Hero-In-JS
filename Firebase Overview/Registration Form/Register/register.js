import { auth, createUserWithEmailAndPassword } from "../firebase.js";

let registerBtn = document.getElementById("registerBtn");
let full_name = document.getElementById("full_name");
let email = document.getElementById("email");
let password = document.getElementById("password");

registerBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User Signed", user);

      window.location =
        "http://127.0.0.1:5500/Firebase%20Overview/Registration%20Form/Login/login.html";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      alert("Error signing up: ", errorCode, errorMessage);
    });
});
