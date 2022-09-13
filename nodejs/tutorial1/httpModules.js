// http module
const http= require("http")
const fetch=require("node-fetch")

//create server
http.createServer(function(req,res){
    console.log(req)
    res.writeHead(200, {'Content-Type': 'text/html'});
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res=>res.json())
    .then(data=>{
       if(req.rawHeaders[3].includes("curl")){
        res.write(data.name)
       }else{
        res.write(`<h1>${data.name}</h1>`)
       }
        
        res.end()
    })
   
    // res.write(`<h1>Hello node.js<h1>
    // <script>alert("hello")</script>
    // <script>console.log("hello")</script>`)
   
}).listen(8080,()=>{
    console.log("server is running")
})