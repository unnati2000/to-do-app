const text = document.getElementById("text");
const add = document.getElementById("add");
const save = document.getElementById("save-todo");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");

let todoArray = [];

add.addEventListener("click", (e) => {
  e.preventDefault();

  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }
  todoArray.push(text.value);

  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
});

function displayTodo() {
  let todo = localStorage.getItem("todo");
  if (todo === null) {
    todoArray = [];
  } else {
    todoArray = JSON.parse(todo);
  }

  let htmlCode = "";
  todoArray.forEach((list, ind) => {
    htmlCode += `<div class='flex mb-4 items-center'>
    <p class=''>${list}</p>
    <button onclick='edit(${ind})' class='flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey bg-green-600'>Edit</button>
    <button onclick='deleteTodo(${ind})' class='flex-no-shrink p-2 ml-2 border-2 rounded bg-red-500'>Delete</button>
</div>`;
  });

  listBox.innerHTML = htmlCode;
}

function edit(ind) {
  saveInd.value = ind;
  let todo = localStorage.getItem("todo");
  let todoArr = JSON.parse(todo);
  text.value = todoArr[ind];
  add.style.display = "none";
  save.style.display = "block";
}

save.addEventListener("click", () => {
  let todo = localStorage.getItem("todo");
  let todoArr = JSON.parse(todo);
  let id = saveInd.value;
  todoArr[id] = text.value;
  add.style.display = "block";
  save.style.display = "none";
  text.value = "";
  localStorage.setItem("todo", JSON.stringify(todoArr));
  displayTodo();
});

function deleteTodo(ind) {
  let todo = localStorage.getItem("todo");
  todoArray = JSON.parse(todo);
  todoArray.splice(ind, 1);
  localStorage.setItem("todo", JSON.stringify(todoArray));
  displayTodo();
}
