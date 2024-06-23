let isStatus = document.getElementById("isStatus");
let requestBtn = document.getElementById("requestBtn");

let flag = true;

requestBtn.addEventListener("click", () => {
  if (flag == true) {
    isStatus.innerText = "Friends";
    isStatus.style.color = "green";

    requestBtn.innerText = "Remove Friend";
    requestBtn.style.backgroundColor = "lightgrey";
    flag = false;
  } else {
    isStatus.innerText = "Stranger";
    isStatus.style.color = "red";

    requestBtn.innerText = "Add Friend";
    requestBtn.style.backgroundColor = "cornflowerblue";
    flag = true;
  }
});
