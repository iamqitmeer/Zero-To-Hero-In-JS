import {
  db,
  doc,
  setDoc,
  auth,
  ref,
  uploadBytes,
  getDownloadURL,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  storage,
} from "../../utils/firebase.js";

// Steps:
// 1 - Register Account - createUserWithEmailAndPassword
// 2 - Upload a Image - ref - uploadBytes - getDownloadURL
// 3 - Set Complete Data into Firestore - doc - setDoc

// Get Element From register.html

let register_btn = document.getElementById("register_btn");
let user_avatar = document.getElementById("user_avatar");
let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let password = document.getElementById("password");
let email = document.getElementById("email");
let company = document.getElementById("company");

register_btn.addEventListener("click", () => {
  register_btn.innerText = "Loading...";
  register_btn.disabled = true;

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      alert("Account registered succesfully");
      console.log(user.uid);

      let userReference = ref(storage, `user/${user.uid}`);
      uploadBytes(userReference, user_avatar.files)
        .then(() => {
          console.log("User Image Uploaded");

          getDownloadURL(userReference)
            .then((url) => {
              console.log("image url --> ", url);

              userInfo.user_avatar = url;

              // User Doc Ref
              let userDbRef = doc(db, "users", user.uid);

              setDoc(userDbRef, userInfo)
                .then(() => {
                  console.log("Add User Obj In to DB");
                  register_btn.innerText = "Register";
                  register_btn.disabled = false;
                  window.location.href = "../login/login.html";
                })
                .catch((e) => {
                  console.log("Error While Adding User Obj In to DB");
                });
            })
            .catch((e) => {
              console.log("error");
            });
        })
        .catch((e) => {
          console.log(`Error While Upload User Image`);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error ${errorCode} while creating your account!`);
      register_btn.innerText = "Register";
      register_btn.disabled = false;
      // ..
    });

  let userInfo = {
    user_avatar: user_avatar.files,
    first_name: first_name.value,
    last_name: last_name.value,
    password: password.value,
    email: email.value,
    company: company.value,
  };
  console.log(userInfo);
});
