import React from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Home from "./Home"
import Contact from "./contact"


function App() {
  return (
  <BrowserRouter>
  <nav>
    <ul>
        <li><Link to={"/"}> Hompage</Link></li>
        <li><a href='/contact'> Contact</a></li> {/*not good practice bcz reloads menu */ }
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
  </Routes>

  </BrowserRouter>
  )
}

export default App
