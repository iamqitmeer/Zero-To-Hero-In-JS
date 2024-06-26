let userInput = document.getElementById("userInput");
let words = document.getElementById("words");
let character = document.getElementById("character");

userInput.addEventListener("keyup", () => {
  // let wordsVar = userInput.value.length
  // let convertInSplit = wordsVar.split(" ")
  // console.log(convertInSplit);

  var wordsAbc = userInput.value.match(/\b[-?(\w+)?]+\b/gi);
  words.innerText = "Words: " + wordsAbc.length;
  character.innerText = "Character: " + userInput.value.length;
});
