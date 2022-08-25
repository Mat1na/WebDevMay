import React, { useState,useEffect, useRef } from 'react'
import {Button} from 'react-bootstrap'

function Blog() {
    const [posts,setPosts]=useState([])
    const getAllPosts=async()=>{
        let res= await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts= await res.json()
        setPosts(posts)
    }

    const buttonRef=useRef()
    const inputRef=useRef()
    useEffect(()=>{
        getAllPosts()
        console.log(buttonRef.current)
        console.log(inputRef.current.value)
      }, []);


  return (
    <div>
    <h1>Blog</h1>
    <Button onClick={getAllPosts} ref={buttonRef}>Get and Print Posts</Button> 
    <input type="text" ref={inputRef} defaultValue="search something"/>
    {
        posts.map((post)=>(
            <a href={`/blog/${post.id}`} key={post.id} className="d-block">{post.title}</a>
        ))
    }
    </div>
  )
}

export default Blog
