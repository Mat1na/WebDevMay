import React,{ useEffect, useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Quiz from "./Quiz";

import Header from "./components/header";
import Footer from "./components//footer";
import "./style/style.css"


function App() {
  // const [allData, setAllData] = useState([]);


  //   useEffect(() => {
        
  //       APIFetch.getAllData()
  //       .then(data=>{
  //           console.log(data)
           
  //       })

        
  //   }, [])
    
  return (
    
   <BrowserRouter>
   <div className='app '>
   <Header/>
   <Routes>
     <Route path='/' exact element={<HomePage />}/>
     <Route path='/quiz' element={<Quiz />}/>
    
 </Routes>
   </div>
   <Footer/>

   
   </BrowserRouter>
  
  );
}

export default App;
