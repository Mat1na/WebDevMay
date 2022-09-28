//import express module
const express = require('express');
const server = express()
const bodyParser=require('body-parser');
const { request } = require('http');

//use bodyParser middleware
server.use(bodyParser({
    extended:true
}))

//hompage http get request endpoint
server.get('/',(request,response)=>{
//display html
  // response.send('hello world')
//display json
  // response.json({
  //     id:1,
  //     username:'admin'
  // })
// response.json([{id:1},{id:2}])

console.log(request.body)
console.log(request.query) //response with url queries response
//http://localhost:8080?username=admin&password=123 with query
})

//params
server.get('/:id', (request,response)=>{
    console.log(request.params)
    response.json({id:1, paramResult:request.params})
})

//post http request
server.post('/',(req,res)=>{
    console.log(req.body)
    res.json({
        usernam:req.body.username,
        password:req.body.password
    })
})



server.listen(8080,()=>{
    console.log('server is running on 8080')
}
)
