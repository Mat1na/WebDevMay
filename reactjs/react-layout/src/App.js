import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

import Home from "./Home";
import MovieDetails from "./MovieDetails";
import SearchResults from "./SearchResults";

function App() {
  
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => {
    if (inputValue !== "") {
      setInputValue(e.target.value);
    } else {
      setInputValue("a");
    }
    
   
  
  }
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&query=${inputValue}`)
        .then(response => response.json())
        .then(data => {
            setResult(data.results)

        })
        .catch(err => console.log(err))
},[page,inputValue])

  // https://api.themoviedb.org/3/genre/movie/list?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US

  const searchResult = () => {
    console.log("This is search handler");
    setResult([
      {
        id: 1,
        name: "Batman & Joker",
      },
    ]);
  };
 

  return (
    <Layout searchResultHandler={searchResult} inputHandler={inputHandler}>
      <Routes>
      <Route path='/' element={<Home inputValue={inputValue} result={result} nextPage={nextPage} prevPage={prevPage} page={page} />} />
        <Route path="/search" element={<SearchResults result={result} />} />
        <Route path="/:movie_id" element={<MovieDetails />} />
        
      </Routes>
    </Layout>
  );
}

export default App;
