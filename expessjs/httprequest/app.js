// first initialize npm init -y
//then npm install express --save

//import express module
const express = require("express");
const app = express();
//npm install dotenv --save   https://www.npmjs.com/package/dotenv
require("dotenv").config();
const bodyParser = require("body-parser");

//use bodyParser middleware
app.use(
  bodyParser({
    extended: true,
  })
);

// middleware
function isUserLogged(req,res,next){
    const {username} = req.query
    if(username!=='admin'){
        res.status(401).send('Unauthorized')
    }else{
        next()
    }
    
    
}

//get request
app.get("/", (req, res) => {
  res.json({
    id: 1,
    title: "lorem ipsum",
    body: "lorem ipsum contennt",
  });
});

//npm install body-parser --save
//post request
app.post("/",isUserLogged, (req, res) => {
  //mongo should save req body here
  const { id, title, body } = req.body;
  res.json({
    id,
    title,
    body,
  });
});

//PUT request   A PUT request is used to send data to a server to create/update a resource.
app.put("/", (req, res) => {
  const { id } = req.query;
  const { title, body } = req.body;
  res.json({
    title,
    body,
    message: `${id} is updated`,
  });
});

//delete
app.delete("/", (req, res) => {
  const { id } = req.query;
  const { _id } = req.body;

  res.json({
    message: `${id} is deleted | ${_id} is deleted`,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});
