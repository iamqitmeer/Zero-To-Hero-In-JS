// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL364dga7wVKQ4cb5j5UiGd5IWTCZCjyc",
  authDomain: "todo-app-javascript-a2786.firebaseapp.com",
  projectId: "todo-app-javascript-a2786",
  storageBucket: "todo-app-javascript-a2786.appspot.com",
  messagingSenderId: "457176105744",
  appId: "1:457176105744:web:4443c1c3735b802b425b95",
};

let addTodo = document.getElementById("addTodo");
let userInput = document.getElementById("user-input");
let list = document.getElementById("list");

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

addTodo.addEventListener("click", async () => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      value: userInput.value,
      createdDate: new Date().toISOString(),
    });
    userInput.value = "";
    console.log("Data Added");
    console.log("Document written with ID: ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

async function getTodos() {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach((doc) => {
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   console.log("doc --> ", doc.data().value);

      let li = `<li>${
        doc.data().value
      } <button onclick="deleteTodo((this))">Delete</button> </li>`;
      list.innerHTML += li;
    });
  } catch (e) {
    console.error(e);
  }
}
getTodos();

function deleteTodo(val){
    console.log(val);
}