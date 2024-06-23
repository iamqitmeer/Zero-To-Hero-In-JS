let inputVal = document.getElementById("inputVal");
if ((inputVal.innerText = "")) {
  console.log("Error!");
}

let btnClicked = (val) => {
  inputVal.innerText += val;
};

let showOutput = () => {
    if (eval(inputVal.innerText) == undefined) {
        inputVal.innerText = ""
    } else {
        inputVal.innerText = eval(inputVal.innerText);
    }
};

let allClear = () => {
  inputVal.innerText = "";
};

let deleteItem = () => {
  inputVal.innerText = inputVal.innerText.toString().slice(0, -1);
};
