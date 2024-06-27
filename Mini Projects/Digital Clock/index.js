let htmlHour = document.getElementById("htmlHour");
let htmlMin = document.getElementById("htmlMin");
let htmlSec = document.getElementById("htmlSec");

let dayOrDate = document.getElementById("dayOrDate");

setInterval(() => {
  
  let currentDate = new Date();
  if (currentDate.getHours() < 10) {
    htmlHour.innerText = "0" + currentDate.getHours();
  } else {
    htmlHour.innerText = currentDate.getHours();
  }
  if (currentDate.getMinutes() < 10) {
    htmlMin.innerText = "0" + currentDate.getMinutes();
  } else {
    htmlMin.innerText = currentDate.getMinutes();
  }

  if (currentDate.getSeconds() < 10) {
    htmlSec.innerText = "0" + currentDate.getSeconds();
  } else {
    htmlSec.innerText = currentDate.getSeconds();
  }

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  dayOrDate.innerText =
    weekday[currentDate.getDay()] +
    ",  " +
    currentDate.getDate() +
    "/" +
    months[currentDate.getMonth()] +
    "/" +
    currentDate.getFullYear();
}, 1000);