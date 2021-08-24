const text = document.getElementById("text");
const add = document.getElementById("add");
const listBox = document.getElementById("listBox");

const todoArray = [];
let id = 0;

add.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(text.value);
  todoArray.push({ text: text.value, id: id + 1 });
  console.log(todoArray);

  text.value = "";

  for (i = 0; i < todoArray.length; i++) {
    // todo
    const todoDiv = document.createElement("div");
    todoDiv.className = "flex mb-4 items-center";

    // title
    const todoTitle = document.createElement("p");
    todoTitle.className = "w-full text-grey-darkest";
    todoTitle.innerText = todoArray[i].text;
    todoDiv.append(todoTitle);

    // edit button

    const todoEditButton = document.createElement("button");
    todoEditButton.className =
      "p-2 lg:px-4 md:mx-2 text-white rounded bg-green-600";
    todoEditButton.innerText = "Edit";
    todoDiv.append(todoEditButton);

    // delete button

    const todoDeleteButton = document.createElement("button");
    todoDeleteButton.className =
      "p-2 lg:px-4 md:mx-2 text-white rounded bg-red-600";
    todoDeleteButton.innerText = "Delete";
    todoDiv.append(todoDeleteButton);

    listBox.append(todoDiv);
  }
});
