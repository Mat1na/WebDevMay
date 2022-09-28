const express = require('express');
const mongoose = require('mongoose');
const Todo = require("./model")
const app = express();
require('dotenv').config()
const { home, todos, savetodo } = require('./controler')
const cors = require('cors')
app.use(express.json())
app.use(cors())



//db connection

mongoose.connect(process.env.MONGO_URI, (err) => console.log("connected"))


//use  middleware
app.use(express.json())

//get request
app.get("/", home);


//Find by several keywords
app.get('/todos', todos)


//post save a todo
app.post('/todo', (req, res) => {
  const { user, id, title, completed } = req.body
  const todo = new Todo({ user, id, title, completed })
  todo.save()
    .then(answer => {
      res.json({
        message: 'saved',
        data: answer
      })
    })

})

app.put('/todo/:id', (req, res) => {
  const { id } = req.params //get id
  Todo.findByIdAndUpdate(id, req.body)
    .then(result => {
      res.json({
        message: 'udated',
        data: result
      })
    })
})




//delete
app.delete('/todo/:id', (req, res) => {
  const { id } = req.params //get id
  Todo.findByIdAndDelete(id)
    .then(result => {
      res.json({
        message: 'deleted',
        data: result
      })
    })
})



//for all requests not found
app.all('*', (req, res) => {
  res.json({
    message: 'not found',

  })
})


//set listen port
app.listen(process.env.PORT)