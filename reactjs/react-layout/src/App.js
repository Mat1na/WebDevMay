import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"

import Layout from './components/Layout/Layout'

import MovieDetails from './MovieDetails'


function App() {
  return (
    <>
    <Layout>

  <Routes>
    <Route path="/" element={<Home/>}/>
   
    <Route path="/:movie_id" element={<MovieDetails/>}/>
  </Routes>

  </Layout>
  </>
  )
}

export default App
