import React, { useState,useEffect } from 'react'
import {Button} from 'react-bootstrap'

function Blog() {
    const [posts,setPosts]=useState([])
    const getAllPosts=async()=>{
        let res= await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts= await res.json()
        setPosts(posts)
    }
    useEffect(()=>{
        getAllPosts();
      }, []);


  return (
    <div>
    <h1>Blog</h1>
    {/* <Button onClick={getAllPosts}>Get and Print Posts</Button> */} //we don t need the buuton with useEffect
    {
        posts.map((post)=>(
            <a href={`/blog/${post.id}`} key={post.id} className="d-block">{post.title}</a>
        ))
    }
    </div>
  )
}

export default Blog
