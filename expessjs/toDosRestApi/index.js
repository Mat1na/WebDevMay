const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
const {home,todos,savetodo}= require('./controler')
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
app.get("/", home);



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

//*****Find by keyword second way*****
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
  app.get('/todos',todos)


  //post save a todo
  app.post('/todo',savetodo)



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




//delete
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
  app.listen(process.env.PORT)