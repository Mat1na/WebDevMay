// import http module 
const http = require('http')

// create server 
const server = http.createServer(function(req,res){
    // console.log(req.url)
    //console.log(req.httpVersion)
    res.writeHead(200,{'Content-Type':'text/html'})
    // res.write(`
    // <h1>Hello World</h1>
    // `)
    // res.end()
    if(req.url === '/'){
        res.write("Hello World - Homepage")
        res.end()
    }else if(req.url ==='/login'){
        res.write("Hello World - Login Page")
        res.end()
    }
})

// listen on port 8080
server.listen(8080,()=>{
    console.log('webserver is running.. on 8080')
})

// printout a message when a new connection is made

server.on('connection',function(socket){
    console.log("Someone connected")
    socket.on('data',function(data){
        console.log(data.toString())
    })
})