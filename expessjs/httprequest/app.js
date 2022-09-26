// first initialize npm init -y
//then npm install express --save


//import express module
const express = require('express');
const app = express()
//npm install dotenv --save   https://www.npmjs.com/package/dotenv
require('dotenv').config()
const bodyParser=require('body-parser');


//use bodyParser middleware
app.use(bodyParser({
    extended:true
}))
//get request
app.get('/',(req,res)=>{
    res.json({id:1,title:'lorem ipsum', body:'lorem ipsum contennt'})
})



//npm install body-parser --save
//post request
app.post('/',(req,res)=>{
    //mongo should save req body here
    const {id,title,body}=req.body
    res.json({
       id,
       title,
       body
    })
})


app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})