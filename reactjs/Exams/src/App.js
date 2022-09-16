import React, { useState } from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import NavBar from "./components/NavBar";
import HomePage from "./Hompage";
import About from "./About"
import "./styles/style.css"

function App() {
    const [todos, setTodos] = useState([]);
  return (
    <BrowserRouter>
     <NavBar/>
   <div className="app justify-content-center align-items-center">
  
      <Routes>
        <Route path="/" element={<HomePage  todos={todos}  setTodos={setTodos}/>}/>
          <Route path="/about" element={<About />}/>
      </Routes>
   </div>
    </BrowserRouter>
  );
}

export default App;
