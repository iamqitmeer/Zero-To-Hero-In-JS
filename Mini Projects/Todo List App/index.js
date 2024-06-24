// Get Element From HTML
let todoList = document.getElementById("todo-list");
let inputValue = document.getElementById("input");
let addTodoBtn = document.getElementById("addTodoBtn");

addTodoBtn.addEventListener("click", (val) => {
  //   console.log(inputValue.value);

  if (inputValue.value) {
    console.log(inputValue.value);

    let listElement = `<li
    class="flex justify-between items-center p-4 border rounded bg-gray-700"
  >
    <span>${inputValue.value}</span>
    <div class="flex space-x-2">
      <button class="text-green-500 hover:text-green-400">
        <i class="ri-check-line"></i>
      </button>
      <button onclick(editTodo(this)) class="text-yellow-500 hover:text-yellow-400">
        <i class="ri-edit-box-fill"></i>
      </button>
      <button onclick(deleteTodo(this)) class="text-red-500 hover:text-red-400">
        <i class="ri-delete-bin-6-fill"></i>
      </button>
    </div>
  </li>`;

    todoList.innerHTML += listElement;

    inputValue.value = "";
  } else {
    alert("Please Enter Todo");
  }
});

let editTodo = () => {}
let deleteTodo = () => {}