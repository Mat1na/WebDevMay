import React, { useEffect, useState } from 'react'
import { CardGroup, Container } from 'react-bootstrap'
import CarouselComponent from './components/Homepage/CarouselComponent'
import MovieCard from './components/Homepage/MovieCard'

function Home() {

  const[movies,setMovies]=useState([])
  const fetchMovies=async()=>{
    let res=await fetch("https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=1")
    let data =await res.json()
    setMovies(data.results)
  }

  useEffect(()=>{
    fetchMovies()
  },[])

  return (
    <Container fluid={true} className="p-0">
      <CarouselComponent />
      {
        console.log(movies)
      }
      <CardGroup className=" justify-content-center p-5 ">
     
    {
      movies!=undefined?
      movies.map((movie)=><MovieCard movie={movie} />):""
    }
    
    
      </CardGroup>
    </Container>
  )
}

export default Home