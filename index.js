const text = document.getElementById("text");
const add = document.getElementById("add");
const listBox = document.getElementById("listBox");

const todoArray = [];
let id = 1;

const deleteItem = (id) => {
  console.log(id);
  todoArray.filter((item) => {
    return item.id === id;
  });
  console.log(todoArray);
};

add.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(text.value);
  todoArray.push({ text: text.value, id: id });

  // todo
  const todoDiv = document.createElement("div");
  todoDiv.className = "flex mb-4 items-center";

  // title
  const todoTitle = document.createElement("p");
  todoTitle.className = "w-full text-grey-darkest";
  todoTitle.innerText = text.value;
  todoDiv.append(todoTitle);

  // edit button
  const todoEditButton = document.createElement("button");
  todoEditButton.className =
    "p-2 lg:px-4 md:mx-2 text-white rounded bg-green-600";
  todoEditButton.innerText = "Edit";
  todoEditButton.id = id;
  todoDiv.append(todoEditButton);

  // delete button

  const todoDeleteButton = document.createElement("button");
  todoDeleteButton.className =
    "p-2 lg:px-4 md:mx-2 text-white rounded bg-red-600";
  todoDeleteButton.innerText = "Delete";
  todoDeleteButton.id = id;
  todoDeleteButton.addEventListener("click", deleteItem(id));
  todoDiv.append(todoDeleteButton);

  listBox.append(todoDiv);

  id = id + 1;

  text.value = "";
});
