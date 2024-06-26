let sub = document.getElementById("sub");
let add = document.getElementById("add");
let num = document.getElementById("num");
let saveNum = document.getElementById("saveNum");
let elemennt = document.getElementById("elemennt");

sub.addEventListener("click", () => (num.innerText = num.innerText - 1));
add.addEventListener("click", () => (num.innerText = +num.innerText + 1));

let resetBtn = () => (num.innerText = 0);
let saveBtn = () => {
  let currentNum = num.innerText;
  let elem = `<div>
            <h1 class="text-9xl font-bold text-center">${currentNum}</h1>
            <button
              onclick="showOnCounter(${currentNum})"
              class="bg-[#212f4d] px-8 py-4 mt-2 rounded-lg"
            >
              Show On<br />Counter
            </button>
          </div>`;

  elemennt.innerHTML += elem;
  currentNum = 0;
};

let showOnCounter = (val) => {
  num.innerText = val;
}
