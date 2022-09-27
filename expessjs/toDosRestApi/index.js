const express = require('express');
const mongoose = require('mongoose');
const app = express();

//db connection
// mongodb://localhost:27017/myDatabase
mongoose.connect('mongodb://localhost:27017/todos',(err)=>{
    console.log('connected to db')
})

//create post schema
const todoSchema=mongoose.Schema({
    user:String,
    id:Number,
    title:String,
    completed:Boolean
})

//compile to model
const Todo=mongoose.model('Todos', todoSchema)

//use  middleware
app.use(express.json())

//get request
app.get("/", (req, res) => {
    res.send(" restfulAPIv1.0");
  });



// app.get("/todos", (req, res) => {
//     //retrieve all todos from mongodb and response them as json
//     Todo.find({})
//     .then(todos=>{
//         console.log(todos)
//         res.json({
//             message:'ok',
//             data:todos
//         })
//     })
//   });


//Find by keyword

// app.get("/search", (req, res) => {
//     if(req.query.title!==undefined){

//         Todo.find({title:{$regex:req.query.title}})
//         .then(todos=>{
//             console.log(todos)
//             res.json({
//                 message:'found ',
//                 data:todos
//             })
//         })
        
//     }
//     else{res.send("use?title=keyword")}
//   });


//Find by keyword second way
// app.get("/todos", (req, res) => {
//     if(req.query.title!==undefined){

//         Todo.find({title:{$regex:req.query.title}})
//         .then(todos=>{
//             console.log(todos)
//             res.json({
//                 message:'found title',
//                 data:todos
//             })
//         })
        
//     }
//     else{Todo.find({}) //get all
//         .then(todos=>{
//             console.log(todos)
//             res.json({
//                 message:'ok',
//                 data:todos
//             })
//         })}
//   });

  //Find by several keywords

  app.get('/todos', (req, res) => {
    console.log(req.query.username)
    if (req.query.title !== undefined && req.query.user !== undefined) {
        Todo.find({ title: { $regex: req.query.title }, user: req.query.user })
            .then(results => {
                res.json({
                    message: 'title and user',
                    todos: results
                })
            })
    } else if (req.query.title !== undefined) {
        Todo.find({ title: { $regex: req.query.title } })
            .then(results => {
                res.json({
                    message: 'title',
                    todos: results
                })
            })

    } else {
        Todo.find({})
            .then(todos => res.json({ message: 'ok', todos: todos }))
    }
})

  //post save a todo
  app.post('/todo',(req,res)=>{
    const {user,id,title,completed}=req.body
    const todo= new Todo({user,id,title,completed})
    todo.save()
        .then(answer=>{
            res.json({
                message:'saved',
                data:answer  
            })
        })
  
  })

  //http://localhost:8080/todo/6332b40440c7e3dd88d1a7a4
  //6332b10e220c443990d091ff
  //6332b3ef40c7e3dd88d1a7a0
  //6332b3f840c7e3dd88d1a7a2
  app.put('/todo/:id',(req,res)=>{
    const {id}=req.params //get id
    Todo.findByIdAndUpdate(id, req.body)
    .then (result=>{
        res.json({
            message:'udated',
            data:result 
        })
    })
  })

  app.delete('/todo/:id', (req,res)=>{
    const {id}=req.params //get id
    Todo.findByIdAndDelete(id)
    .then(result=>{
        res.json({
            message:'deleted',
            data:result
        })
    })
  })

  //for all requests not found
  app.all('*',(req,res)=>{
    res.json({
        message:'not found',
       
    })
  })








  //set listen port
app.listen(8080,()=>{  console.log('Server started on port 8080');})