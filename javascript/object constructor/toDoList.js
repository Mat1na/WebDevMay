


function ToDoApp(){
    this.title=[];
}

ToDoApp.prototype.showInfo=function(){
 //   console.log(`Task:${this.task}\nDay:${this.day}\nHour:${this.hour}`)
 console.log(this.title)
}

ToDoApp.prototype.addToDo=function(task,day,hour){
    this.title.push({
        todo_title: task,
        created_date : `${day}, ${hour}` // Monday 10AM
    })
}

ToDoApp.prototype.deleteToDo=function(value){
    let temp=[]

  const indexOfObject = this.title.findIndex(function(object){
    return object.todo_title.toLowerCase() == value.toLowerCase()
  })
  console.log(indexOfObject)
  this.title.splice(indexOfObject,1)
}


let entry=new ToDoApp()
entry.addToDo('Go to school','Monday','10AM')
entry.addToDo('Go to shopping','Saturday','9AM')

entry.deleteToDo("Go to shopping")
entry.showInfo()