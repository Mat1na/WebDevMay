class ToDoApp {
  constructor() {
    this.toDos = [];
  }

  // addTodo

  addToDo(task, day, hour) {
    return this.toDos.push({
      todo_title: task,
      created_date: `${day}, ${hour}`,
    });
  }

  //get ToDos->all todos
  getToDo() {
    return this.toDos;
  }

  // getToDoByValue->single todo
  getTodoByValue(todo) {
    let single_todo = this.toDos.filter(
      (val) => val.todo_title.toLowerCase().trim() == todo.toLowerCase().trim()
    );
    return single_todo;
  }

  // deleteToDoById
  deleteToDoById(value) {
    //  let temp = [];

   
    const indexOfObject = this.toDos.findIndex(function (object) {
      return object.todo_title.toLowerCase() == value.toLowerCase();
    });
    console.log(indexOfObject);
    this.toDos.splice(indexOfObject, 1);
  }

  // toString->display todos
  toString() {
    //    Object.values(this.toDos).forEach(index,todo=>{
    //         console.log(`#${index} task:${todo}`)
    //     })
    this.toDos.forEach((todo, index) => {
      console.log(`#${index} task: ${todo.todo_title}`);
    });
  }
}

let app = new ToDoApp();
app.addToDo("Go to school", "Monday", "10AM");
app.addToDo("Go to shopping", "Saturday", "9AM");
app.addToDo("Learn javascript", "Every day", "Every hour");
// console.log(app.getToDo());
// app.deleteToDoById('Go to school')
app.deleteToDoById('Learn javascript')
app.toString()
// app.getTodoByValue("Go to school");
console.log(app.getTodoByValue("Go to school"));
// console.log(app.deleteToDoById("Go to school"));
