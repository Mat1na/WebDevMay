// first initialize npm init -y
//then npm install express --save


//import express module
const express = require('express');
const app = express()
require('dotenv').config()

//npm install dotenv --save   https://www.npmjs.com/package/dotenv

server.listen(process.env.PORT,()=>{
    console.log(`server is running on ${process.env.PORT}`)
})