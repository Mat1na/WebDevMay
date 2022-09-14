console.log("Hello world")

//check version node -v   npm i nodemon -g=> for nodemon
// npm init to start application
//npm start (check package json)
//npm run dev

// import a module
const fetch =require ("node-fetch")

//npm install node-fetch@2
fetch("https://jsonplaceholder.typicode.com/todos")
.then(res=>res.json())
.then(data=>console.log(data))