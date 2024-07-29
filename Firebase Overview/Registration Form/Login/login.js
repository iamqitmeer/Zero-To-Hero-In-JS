import { auth, signInWithEmailAndPassword } from "../firebase.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", () => {
  //   console.log(email.value);
  //   console.log(password.value);

 

  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      let user = userCredential.user;
      console.log(user);
      window.location =
        "/index.html";

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    });
});
