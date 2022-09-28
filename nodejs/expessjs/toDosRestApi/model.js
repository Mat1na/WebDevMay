const mongoose = require("mongoose")

//create post schema
const todoSchema=mongoose.Schema({
    user:String,
    id:Number,
    title:String,
    completed:Boolean
})

//compile to model
const Todo=mongoose.model('Todos', todoSchema)

module.exports = Todo