//import modules
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

//use middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("welkom to protected restful api"));

app.post("/login", (req, res) => {
  const { username } = req.body;

  jwt.sign({ username }, "secretkey", (err, token) => {
    res.json({
      payload: req.body,
      token,
    });
  });
});

//isTokenvalid middlware function
const isTokenvalid = (req, res, next) => {
  console.log(req.headers["authorization"]);
  const token = req.headers["authorization"];
  jwt.verify(token, "secretkey", (err, decoded) => {
    if (!err) {
      req.user = decoded;
      next();
    } else {
      res.status(403).send("forbidden");
    }
  });
};

app.get("/profile", isTokenvalid, (req, res) => {
  res.json({
    id: 1,
    username: "admin",
  });
});

//set listener
app.listen(3000, () =>
  console.log("server is running at http://localhost:3000")
);
