// import modules
const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs') // bcryptjs module - npm i bcryptjs --save
require('dotenv').config()

// import mongoose 
const mongoose = require('mongoose')

console.log(process.env.DATABASE_URL)

// db connection 
mongoose.connect(process.env.DATABASE_URL, () => console.log('db connected'))

// user schema
const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique:true

    },
    password: {
        type: String
    }
})

// compile schema to model
const User = mongoose.model('Users', userSchema)


// use middlewares
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => res.send('Welcome to protected restful api'))

// registration endpoint 
app.post('/register', (req, res) => {
    console.log(req.body)
    const password = bcrypt.hashSync(req.body.password,10) // password is encrypted here
    // make obj from User model
    const new_user = new User({
        username:req.body.username,
        password:password
    })
    new_user.save()
        .then(user => {
            res.json({
                msg: 'User created',
                data: user
            })
        })
        .catch(err => {
            if (err) {
                res.status(403).send('try with another username')
            }
        })
    // User.create({
    //     username:req.body.username,
    //     password:req.body.password
    // })
})

app.post('/login', (req, res) => {
    const { username,password } = req.body
    // jwt.sign({ username }, process.env.JWT_KEY, {
    //     algorithm: 'HS256',
    //     expiresIn: '2000s'
    // }, (err, token) => {
    //     res.json({
    //         payload: req.body,
    //         token: token
    //     })
    // })
    // step1 find username
    User.find({username:username})
    .then(user=>{
        console.log(user.length)
        if(user.length>0){
            // user is exist
            let isPassCorect=bcrypt.compareSync(password, user[0].password)
            if(isPassCorect){
                jwt.sign({username:username},process.env.JWT_KEY,(err,token)=>{
                    res.json({
                        msg:'User logged in',
                        token:token
                    })
                })
            }else{
                res.json({msg:'username or password incorrect'})
            }
        }else{
            res.json({
                msg:'username or password incorrect'
            })
        }
    })

})

// istokenvalid middleware function
// const isTokenValid = (req, res, next) => {
//     console.log(req.headers['authorization'])
//     const token = req.headers['authorization']
//     jwt.verify(token, 'verysecretkey', (err, decoded) => {
//         if (!err) {
//             req.user = decoded
//             next()
//         }else{
//             res.status(403).send('Forbidden')
//         }
//     })
// }

// // retrieve token as bearer
// const isTokenExist = (req,res,next)=>{
//     console.log(req.headers['authorization'].split(' ')[1])
//     const token = req.headers['authorization'].split(' ')[1]
//     jwt.verify(token,'verysecretkey',(err,decoded)=>{
//         if(decoded!==undefined){
//             // http 200 success response
//             req.user= decoded
//             next()
//         }else{
//             res.status(403).send('Forbidden')
//         }
//     })
// }

// token from url query
const isTokenExist = (req, res, next) => {
    console.log(req.query)
    const token = req.query.apiKey
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (decoded !== undefined) {
            req.user = decoded
            next()
        } else {
            // forbidden
            res.status(403).send('Forbidden')
        }
    })
}



app.get('/profile', isTokenExist, (req, res) => {
  console.log(req.user)
    res.json(req.user)
})

// set listener port number
app.listen(3000, () => console.log('Server is running at http://localhost:3000'))

