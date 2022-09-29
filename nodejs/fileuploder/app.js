//npm init
//npm i cors multer express

const cors=require('cors')
const express = require('express');
const multer = require('multer');

//server
const server=express()

// use middlewares
server.use(cors())
server.use(express.json())

server.get('/', (request, response) => {
    response.json({
        message: "Welcome to restful api"
    })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

const uploader = multer({ storage })

server.post('/',uploader.single('document'),(request, response) => {
    console.log(request.file.path) // display file location out
    response.json({
        msg: 'ok'
    })
})

// port number for server
server.listen(4000, () => console.log("Server is running on 4000"))