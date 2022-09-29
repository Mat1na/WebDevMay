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
server.use('/uploads',express.static('./uploads'))
//http://localhost:4000/uploads/vaillant-logo-272x72-1888261.png  (filename)

server.get('/', (request, response) => {
    response.json({
        message: "Welcome to restful api"
    })
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './uploads'),
    filename: (req, file, cb) => cb(null, file.originalname)
})

const uploader = multer({ 
    storage,
    fileFilter:(req, file, callback)=>{
        console.log(file.mimetype)
        let images='/jpeg|jpeg|png|gif'
        let isValidImg= file.mimetype.match(images)
        if(file.mimetype==='application/pdf'||isValidImg){
            callback(null,true)
        }else{
            callback(new Error('not allowed'))
        }
    }
 })

server.post('/',uploader.single('document'),(request, response) => {
    console.log(request.file.path) // display file location out
    response.json({
        msg: 'ok'
    })
})

// port number for server
server.listen(4000, () => console.log("Server is running on 4000"))