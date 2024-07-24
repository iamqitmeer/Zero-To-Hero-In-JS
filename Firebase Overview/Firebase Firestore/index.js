import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa87obQWa-IdmBUZdgt9iihMDM2xBSVoo",
  authDomain: "fir-firestore-cf729.firebaseapp.com",
  projectId: "fir-firestore-cf729",
  storageBucket: "fir-firestore-cf729.appspot.com",
  messagingSenderId: "771113878010",
  appId: "1:771113878010:web:d0c6f418f11748866da443",
  measurementId: "G-VWT01YH9ZL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
console.log(db);

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

let addDataToDatabase = document.getElementById("addDataToDB");
let name = document.getElementById("name");
let age = document.getElementById("age");
let email = document.getElementById("email");

addDataToDatabase.addEventListener("click", async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, "users"), {
  //       name: name.value,
  //       age: age.value,
  //       email: email.value,
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  try {
    const docRef = await addDoc(collection(db, "randomNum"), {
      number: Math.round(Math.random() * 10),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});
