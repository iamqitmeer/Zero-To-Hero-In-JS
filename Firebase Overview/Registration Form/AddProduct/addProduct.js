import {
  storage,
  ref,
  db,
  collection,
  addDoc,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "../firebase.js";

let addProduct = document.getElementById("addProduct");
let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let category = document.getElementById("category");
let file;
const selectShowPic = () => {
  const userPhotoUpload = document.getElementById("userPhotoUpload");
  const inputFile = document.getElementById("inputFile");

  if (!userPhotoUpload || !inputFile) {
    console.error("Element with specified IDs not found");
    return;
  }

  userPhotoUpload.addEventListener("click", () => {
    inputFile.click();
  });

  inputFile.addEventListener("change", () => {
    file = inputFile.files[0];
    if (file) {
      userPhotoUpload.src = URL.createObjectURL(file);
    }
  });
};

// Call the function after the DOM has loaded
window.addEventListener("DOMContentLoaded", selectShowPic);

addProduct.addEventListener("click", async () => {
  console.log(file);
  const productStorageRef = ref(storage, `productImages/${file.name}`);
  const uploadTask = uploadBytesResumable(productStorageRef, file);
  await uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log("Please wait your picture is saving. " + progress + "%");
    },
    (error) => {
      console.log("error", error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref)
        .then((downloadURL) => {
          console.log(downloadURL);
        })
        .catch((error) => {
          console.log("Try again.");
        });
    }
  );

  //   try {
  //     const docRef = await addDoc(collection(db, "products"), {
  //       title: title.value,
  //       description: description.value,
  //       price: price.value,
  //       image: image.files,
  //       category: category.value,
  //     });
  //     alert("Data Added in DB");
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     alert("Error adding document: ", e);
  //   }
});
