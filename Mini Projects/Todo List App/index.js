// Get Element From HTML
let todoList = document.getElementById("todo-list");
let inputValue = document.getElementById("input");
let addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", (val) => {
  //   console.log(inputValue.value);

  if (inputValue.value) {
    console.log(inputValue.value);

    let listElement = `<li class="flex justify-between items-center p-4 border rounded bg-gray-700">
                <span>${inputValue.value}</span>
                <button onclick="deleteTodo(this)" class="bg-red-500 text-white p-2 rounded hover:bg-red-600 ml-2">Delete</button>
            </li>`;

    todoList.innerHTML += listElement;

    inputValue.value = "";
  } else {
    alert("Please Enter Todo");
  }
});

let deleteTodo = (ele) => {
  ele.parentElement.remove();
};
