import { auth } from "../firebase";

let registerBtn = document.getElementById("registerBtn");
let full_name = document.getElementById("full_name");
let email = document.getElementById("email");
let password = document.getElementById("password");

registerBtn.addEventListener("click", () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log("User Signed" , user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorMessage);
    });
});
