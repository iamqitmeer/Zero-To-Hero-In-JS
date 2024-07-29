import {
  ref,
  storage,
  setDoc,db,
  getDoc,
  uploadBytes,
  collection,
  addDoc,
  getDownloadURL,
} from "../utils/firebase.js";

let addProduct = document.getElementById("addProduct");
let title = document.getElementById("title");
let description = document.getElementById("description");
let price = document.getElementById("price");
let image = document.getElementById("image");
let stocks = document.getElementById("stocks");
let category = document.getElementById("category");

addProduct.addEventListener("click", () => {
    let productData = {
      productImage: image.files[0], // Get the first file from the input
      title: title.value,
      description: description.value,
      price: price.value,
      stocks: stocks.value,
      category: category.value,
    };
  
    if (productData.productImage) {
      let productImageRef = ref(storage, 'images/' + productData.productImage.name); // Specify a non-root reference
  
      uploadBytes(productImageRef, productData.productImage).then(() => {
        console.log("File Uploaded");
  
        getDownloadURL(productImageRef).then((url) => {
          console.log("Url --->", url);
          productData.productImage = url;
  
          let prodCollection = collection(db, "product");
          addDoc(prodCollection, productData).then((snapshot) => {
            console.log("Doc Added -->", snapshot);
          });
        });
      }).catch((error) => {
        console.error("Error uploading file:", error);
      });
    } else {
      console.error("No file selected for upload.");
    }
  });
  
