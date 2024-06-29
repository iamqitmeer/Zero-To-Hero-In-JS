window.onload = function () {
    addColor();
  };
  

  
  for (let i = 1; i <= 6; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    document.querySelector(".container").appendChild(box);
    box.style.cursor = "pointer";
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(box.innerHTML);
      toastr.success("Now you can use it!", "Copied to clipboard", {
        timeOut: 500,
      });
    });
  }
  

  const btn = document.querySelector(".btn");
  const randomColorBlock = document.querySelectorAll(".box");
  
  function RandomHexColorCode() {
    var chars = "0123456789abcdef";
    var colorLength = 6;
    var color = "";
  
    for (var i = 0; i < colorLength; i++) {
      var randomColor = Math.floor(Math.random() * chars.length);
      console.log(chars.substring(randomColor, randomColor + 1));
      color += chars.substring(randomColor, randomColor + 1);
    }
    return "#" + color;
  }
  
  function addColor() {
    randomColorBlock.forEach((e) => {
      var newColor = RandomHexColorCode();
      e.style.backgroundColor = newColor;
      e.innerHTML = newColor;
    });
  }