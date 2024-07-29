import { getDocs, collection, db, doc } from "../utils/firebase.js";

let main = document.getElementById("main");

async function getDataFromDB() {
  const querySnapshot = await getDocs(collection(db, "product"));
  querySnapshot.forEach((doc) => {
    // console.log(`${doc.data()}`);

    let ecomData = doc.data();
    console.log(doc.data());

    let cart = `<div class="max-w-2xl mx-auto m-4">
        <div
          class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-t-lg p-8"
              src=${ecomData.productImage}
              alt="product image"
            />
          </a>
          <div class="px-5 pb-5">
            <a href="#">
              <h3
                class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white"
              >
                ${ecomData.title}
              </h3>
            </a>

            <div class="mt-4 flex items-center justify-between">
              <span class="text-3xl font-bold text-gray-900 dark:text-white"
                >$${ecomData.price}</span
              >
              <a
                href="#"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Add to cart</a
              >
            </div>
          </div>
        </div>
      </div>`;

      main.innerHTML += cart
  });
}

getDataFromDB();
