let htmlHour = document.getElementById("htmlHour");
let htmlMin = document.getElementById("htmlMin");
let htmlSec = document.getElementById("htmlSec");

let startWatchId = document.getElementById("startWatch");
let stopWatchId = document.getElementById("stopWatch");

let miliSecond = 0;
let minute = 0;
let second = 0;
let hour = 0;

let watchInterval;

let startWatch = () => {
  watchInterval = setInterval(() => {
    miliSecond++;
    if (miliSecond > 59) {
      second++;
      htmlSec.innerText = second;

      miliSecond = 0;
    } else if (second > 59) {
      minute++;
      htmlMin.innerText = minute;

      second = 0;
    } else if (minute > 59) {
      hour++;
      htmlHour.innerText = hour;
      minute = 0;
    }
  }, 1);

  startWatchId.disabled = true;
  stopWatchId.disabled = false;
};
let stopWatch = () => {
  clearInterval(watchInterval);
  startWatchId.disabled = false;
  stopWatchId.disabled = true;
};
let resetWatch = () => {
    clearInterval(watchInterval)
    miliSecond = 0
    second = 0
    hour = 0
    miliSecond = 0

    htmlHour.innerText = 0
    htmlMin.innerText = 0
    htmlSec.innerText = 0
};
