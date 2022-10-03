//import modules
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/users", (err) => {
  console.log("connected to db");
});

//use middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("welkom to protected restful api"));

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  User.find({ username: username }).then((user) => {
    console.log(user.length);
    if (user.length > 0) {
      if (user[0].password === password) {
        console.log("correct");
        jwt.sign(
          { username: username },
          process.env.SECRET_KEY,
          (err, token) => {
            res.json({
              msd: ` user ${username} is logged in`,
              token: token,
            });
          }
        );
      } else {
        res.json({
          msg: "username or password is incorect",
        });
      }
    } else {
      res.json({
        msg: "username or password is incorect",
      });
    }
  });
});

//create post schema
const userSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
});
//compile to model
const User = mongoose.model("Users", userSchema);

app.post("/registration", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save()
    .then((user) => {
      res.json({
        message: "user",
        data: user,
      });
    })

    .catch((error) => {
      if (error) {
        res.status(403).send("try another username");
      }
    });
});

// //find user
// //*****Find by keyword
// app.get("/users", (req, res) => {
//     if(req.query.username!==undefined){

//         User.find({username:{$regex:req.query.username}})
//         .then(users=>{
//             console.log(users)
//             res.json({
//                 message:'found user',
//                 data:users
//             })
//         })

//     }else {
//         User.find({})
//             .then(users => res.json({ message: 'ok', users: users }))
//     }

//   });

// //isTokenvalid middlware function
// const isTokenvalid = (req, res, next) => {
//   console.log(req.headers["authorization"]);
//   const token = req.headers["authorization"];
//   jwt.verify(token, "secretkey", (err, decoded) => {
//     if (!err) {
//       req.user = decoded;
//       next();
//     } else {
//       res.status(403).send("forbidden");
//     }
//   });
// };

//retrive token as bearer
// const isTokenExist= (req,res,next)=>{
//     console.log(req.headers['authorization'].split(' ')[1])
//     const token=req.headers['authorization'].split(' ')[1]
//     jwt.verify(token, 'secretkey',(err,decoded)=>{
//         console.log(decoded)
//         if(decoded!==undefined){
//             req;user=decoded
//             next()
//         }else{
//             res.status(403).send('forbidden')
//         }
//     })
// }

//

//token from url query
const isTokenExist = (req, res, next) => {
  console.log(req.query);
  const token = req.query.apiKey;
  jwt.verify(token, "secretkey", (er, decoded) => {
    if (decoded !== undefined) {
      req.user = decoded;
      next();
    } else {
      //forbidden
      res.status(403).send("forbidden");
    }
  });
};

app.get("/profile", isTokenExist, (req, res) => {
  res.json({
    id: 1,
    username: "admin",
    followers: 100,
  });
});

//set listener
app.listen(3000, () =>
  console.log("server is running at http://localhost:3000")
);
