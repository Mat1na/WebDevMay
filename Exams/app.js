let input = document.querySelector(".input");
let addBtn = document.querySelector(".addbtn");
let deleteAllBtn = document.querySelector(".deleteAllBtn");
let list = document.querySelector(".myUL");
let listSection = document.querySelector("todolist");

const g = (t) => document.createElement(t);
function toDoListGenerator(entry) {
  const newEntry = g("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-start";
  const textOfLi = document.createTextNode(entry.title);
  const button = g("button");
  const trashCan = g("i");
  trashCan.setAttribute("aria-hidden", "true");
  trashCan.className = "fa fa-trash lead ";
  button.append(trashCan);
  newEntry.append(textOfLi, button);
  list.append(newEntry);
  //   document.body.append(list)
  return listSection.append(list);
}

let toDosList = [];

addBtn.addEventListener("click", (e) => {
  let newToDo = {
    id: toDosList.length,
    title: input.value,
  };

  fetch("http://localhost:5000/ToDos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(newToDo),
  })
    .then((response) => response.json())
    .then((newToDo) => {
      console.log(newToDo);
      toDosList = toDosList.push(toDoListGenerator(newToDo));
      e.preventDefault();
    })
    .catch((error) => {
      console.log(error);
    });
});
