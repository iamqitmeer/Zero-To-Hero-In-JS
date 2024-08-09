// Write a function which returns true if given value of number is an integer without using any inbuilt functions

// function isInteger(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isInteger(12.1));

// Create a function which returns a random number in the given range of values both inclusive

// function generateRandomNum(num) {
//     return Math.floor(Math.random() * num)
// }

// console.log(generateRandomNum(400));

// Write a program to reverse a string

// let str = "Hello World";
// function reverseAString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseAString(str));

// Write a program to reverse a string by words. Also show the reverse of each words in place

// let str = "Hello World";
// function reverseAString(str) {
//   return str.split(" ").reverse().join(" ");
// }
// console.log(reverseAString(str));

// Write a program to reverse a given integer number

// let num = 4356;
// function reverseANum(number) {
//   return number.toString().split("").reverse().join("");
// }
// let output = reverseANum(num);
// console.log(parseInt(output));

// Write a code to replace all the spaces of the string with underscores.

// let str = "Hello World I am Qitmeer Raza a learner"
// console.log(str.split(' ').join('-'));


var reverse = function(x) {
    return +x.split("").reverse().join("");
  };
  
  let output = reverse(456);
  console.log(parseInt(output));