// Pages
let login = document.getElementById("login");
let notes = document.getElementById("notes");

// Login

let fullName = document.getElementById("fullName");
let email = document.getElementById("email");
let password = document.getElementById("password");

// Notes

let welcomeText = document.getElementById("welcomeText");
let noteHeading = document.getElementById("noteHeading");
let noteContent = document.getElementById("noteContent");

let loginBtn = () => {
  localStorage.setItem("fullName", fullName.value);
  localStorage.setItem("email", email.value);
  checkIsUserLogin();
};

function checkIsUserLogin() {
  if (localStorage.getItem("fullName") && localStorage.getItem("email")) {
    login.style.display = "none";
    notes.style.display = "block";
  } else {
    login.style.display = "block";
    notes.style.display = "none";
  }
}

checkIsUserLogin();

let userName = localStorage.getItem("fullName");
userName = userName.split(" ");
welcomeText.innerText = "Welcome, " + userName[0];

let logoutBtn = () => {
  localStorage.removeItem("fullName");
  localStorage.removeItem("email");

  checkIsUserLogin();
};

let addNoteBtn = () => {
  //   if (!noteHeading.value && !noteContent.value) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Please Write Notes Heading & Content",
  //     });
  //   } else if (!noteHeading.value) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Please Write Notes Heading",
  //     });
  //   } else if (!noteContent.value) {
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Please Write Notes Content",
  //     });
  //   } else {
  let obj = {
    email: localStorage.getItem("email"),
    noteHead: noteHeading.value,
    noteCon: noteContent.value,
  };
  saveValueToLocalStorage(obj);
  // noteHeading.value = "";
  // noteContent.value = "";
  //   }
  // console.log();
};

let saveValueToLocalStorage = (obj) => {
  //   localStorage.setItem("note", JSON.stringify(obj));

  var notes = localStorage.getItem("notes");
  console.log("notes from local storage => ", notes);

  if (notes) {
    notes = JSON.parse(notes);
    notes.push(obj);
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  } else {
    notes = [obj];
    console.log(notes);
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  displayUserNotes();

};

function displayUserNotes() {
  var notes = localStorage.getItem("notes");
  var bigDiv = document.getElementById("bigDiv");
  var currentUserEmail = localStorage.getItem("email");

  if (notes) {
    bigDiv.innerHTML = "";
    notes = JSON.parse(notes);
    console.log(notes);
    notes.forEach(function (data, ind) {
      console.log("data=>", data);
      if (data.email === currentUserEmail) {
        var liElement = ` <div>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              ${data.noteHead}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
            ${data.noteCon}
            </p>
          </a>
        </div>`;
        bigDiv.innerHTML += liElement;
      }
    });
  }
}

displayUserNotes();
