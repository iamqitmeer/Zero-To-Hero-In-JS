// Understanding What is Async Javascript?

// ---> Sync
// console.log("A");
// console.log("B");
// console.log("C");

// ---> Async

// console.log("A (Sync Code)");
// console.log("B (Sync Code)");
//   setTimeout(() => {
//     console.log("C (Async Code)");
//   }, 0);
// console.log("D (Sync Code)");

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// CallBacks

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

let isUserLoggedIn = true;

function greetAfterLoggedIn() {
  let user = {
    name: "Qitmeer Raza",
    email: "iamqitmeer",
  };
  console.log(`Good Morning ${user.name}.`);
}

function loggedInMsg(callback) {
  if (isUserLoggedIn) {
    setTimeout(() => {
      console.log("You Are Logged In");
      callback();
    }, 1000);
  }
}

loggedInMsg(greetAfterLoggedIn);

// function logIn(callback) {
//   setTimeout(() => {
//     console.log("You Logged In");
//     callback();
//   }, 1000);
// }

// function userInformation() {
//   setTimeout(() => {
//     let user = {
//       name: "Qitmeer",
//       email: "iamqitmeer@gmail.com",
//       phoneNumber: "+923108884192",
//     };
//     console.log("User Information ---> " + user);
//   }, 500);
// }

// logIn(userInformation);

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// Promise

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// let newPromise = new Promise((res, rej) => {
//   if (5 == "1") {
//     res("User is Logged In");
//   } else {
//     rej("User is not Logged In");
//   }
// });

// newPromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Use Promise With CallBack

// let userLoggedIn = true;

// let pr = new Promise((res, rej) => {
//   if (userLoggedIn) {
//     setTimeout(() => {
//       res("Yes, User Logged In.");
//     }, 1000);
//   } else {
//     rej("No, Something Went Wrong!");
//   }
// });

// let getUserInfo = () => {
//   let user = {
//     name: "Qitmeer",
//     email: "razaqitmeer124@gmail.com",
//   };
//   console.log(`${user.name} is logged in.`);
// };

// pr.then((data) => {
//   getUserInfo();
// }).catch((err) => {
//   console.log(err);
// });

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// Fetch

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------

// function getDataFromApi(callback) {
//   fetch(`https://fakestoreapi.com/products`)
//     .then((res) => res.json())
//     .then((data) => callback(data));
// }

// function displayData(val) {
//   console.log(val);

//   val.forEach((item) => {
//     console.log(item);
//     let mainElem = document.getElementById("mainElem");
//     let elem = `<div
//                 class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96"
//               >
//                 <div
//                   class="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
//         >
//           <img
//             src="${item.image}"
//             alt="card-image"
//           />
//         </div>
//         <div class="p-6">
//           <h5
//             class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
//           >
//           ${item.title}
//           </h5>
//           <p
//             class="block font-sans text-base antialiased font-light leading-relaxed text-inherit"
//           >
//           ${item.description}
//           </p>
//         </div>
//         <div class="p-6 pt-0">
//           <button
//             class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
//             type="button"
//           >
//             Read More
//           </button>
//         </div>
//       </div>`;

//     mainElem.innerHTML += elem;
//   });
// }

// getDataFromApi(displayData);
