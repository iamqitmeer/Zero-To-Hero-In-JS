import {
  auth,
  signOut,
  onAuthStateChanged,
  storage,
  getDoc,
  doc,db
} from "./utils/firebase.js";

let logout = document.getElementById("signout");
let user_avatar = document.getElementById("user_avatar");
let user_name = document.getElementById("user_name");
let user_email = document.getElementById("user_email");

logout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("Sign-out successful.");
    })
    .catch((error) => {
      alert(`An ${error} happened.`);
    });
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    console.log("user is logged in");
    console.log(storage);

    getUserInformation(uid)
    logout.style.display = "block";
  } else {
    window.location.href = "./auth/login/login.html";
    console.log("User is signed out");
    logout.style.display = "none";
    // ...
  }
});

function getUserInformation(uid) {
    const userRef = doc(db, "users", uid)
    getDoc(userRef).then((data) => {
        let dataMilGaya = data.data()
        console.log("data --> ", dataMilGaya);
        user_name.innerText = `${dataMilGaya.first_name} ${dataMilGaya.last_name}`
        user_email.innerText = dataMilGaya.email
        user_avatar.src = dataMilGaya.user_avatar
        console.log(user_avatar.src);
    }).catch((e) => {
        console.log('Error');
    })
}