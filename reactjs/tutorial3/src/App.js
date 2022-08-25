import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Layout from './components/Layout/Layout'
import About from './About'


function App() {
  return (
    <>
    <Layout>

  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>

  </Layout>
  </>
  )
}

export default App
