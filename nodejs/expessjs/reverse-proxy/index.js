//npm i http-proxy-middleware
const cors=require('cors')
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app=express()

//use middleware
app.use(cors())
app.use(express.json())

//proxy server
app.use(
    '/news', createProxyMiddleware({
      target :'https://newsapi.org/v2/top-headlines?country=US&apiKey=95221ebc50cf4e13b60594d17bb22237' ,
      pathRewrite:{['/news']:''}, // http://localhost:4000/news
      changeOrigin:true,
      secure:true
    })
)

app.use('/jsonplaceholder',createProxyMiddleware({
    target :'https://jsonplaceholder.typicode.com' ,
      pathRewrite:{['/jsonplaceholder']:''}, 
      changeOrigin:true,
      secure:true 
}))

app.listen(4000,()=>console.log(("server is running...")))