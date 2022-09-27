// npm init -y
//npm i express mongoose --save
const express = require('express');
const mongoose = require('mongoose');
const app = express();


//db connection
// mongodb://localhost:27017/myDatabase
mongoose.connect('mongodb://localhost:27017/express',(err)=>{
    console.log('connected to db')
})

//create post schema
const postSchema=mongoose.Schema({
    title:String,
    content:String,
    date:String
})
//compile to model
const Post=mongoose.model('Posts', postSchema)

//use  middleware
app.use(express.json())

//get request
app.get("/", (req, res) => {
    res.send("Nespaper restfulAPIv1.0");
  });

app.get("/posts", (req, res) => {
    //retrieve all post from mongodb and response them as json
    Post.find({})
    .then(posts=>{
        console.log(posts)
        res.json({
            message:'ok',
            data:posts
        })
    })
  });

  app.post('/post',(req,res)=>{
    const {title,content}=req.body
    const post= new Post({title,content, date:new Date()})
    post.save()
        .then(answer=>{
            res.json({
                message:'saved',
                data:answer  
            })
        })
  
  })


//http://localhost:8080/post/6332a8ece483e22d7566110f
  app.put('/post/:id',(req,res)=>{
    const {id}=req.params //get id
    Post.findByIdAndUpdate(id, req.body)
    .then (result=>{
        res.json({
            message:'udated',
            data:result 
        })
    })
  })




  //delete

  app.delete('/post/:id', (req,res)=>{
    const {id}=req.params //get id
    Post.findByIdAndDelete(id)
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
