import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Quiz from "./Quiz";
import Header from "./components/header";
import Footer from "./components//footer";
import "./style/style.css";

function App() {
  const [selectedCat, setSelectedCat] = useState([]);
  const [difficulty, setDifficulty] = useState([]);
 

 

  async function fetchAllData() {
    let res = await fetch(
      `https://opentdb.com/api.php?amount=10&category=${selectedCat}&difficulty=${difficulty}&encode=base64`
    );

    let data = await res.json();

    
  
  }
 
  // function Answers ()
  // {
   
  
  
  //   }

  return (
    <BrowserRouter>
      <div className="app ">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <HomePage
                setDifficulty={setDifficulty}
                setSelectedCat={setSelectedCat}
                selectedCat={selectedCat}
                difficulty={difficulty}
                               fetchAllData={fetchAllData}
              
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                difficulty={difficulty}
                selectedCat={selectedCat}
           
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
