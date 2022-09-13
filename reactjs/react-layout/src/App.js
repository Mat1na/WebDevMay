import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Home";
import MovieDetails from "./MovieDetails";
import Action from "./genres/Action"
import Adventure from "./genres/Adventure"
import Animation from "./genres/Animation";
import Comedy from "./genres/Comedy";
import Crime from "./genres/Crime";
import Documentary from "./genres/Documentary";
import Drama from "./genres/Drama";
import Family from "./genres/Family";
import Fantasy from "./genres/Fantasy";
import History from "./genres/History";
import Horror from "./genres/Horror";
import Music from "./genres/Music";
import Mystery from "./genres/Mystery";
import Romance from "./genres/Romance";
import Sifi from "./genres/Science%20Fiction";
import Thriller from "./genres/Thriller";
import TVMovie from "./genres/TV%20Movie";
import War from "./genres/War";
import Western from "./genres/Western";



function App() {
  

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  };
  const prevPage = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
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
  // const searchResult = () => {
  //   console.log("This is search handler");
  //   setResult();


  //   setResult([
  //     {
  //       id: 1,
  //       name: "Batman & Joker",
  //     },
  //   ]);
  // };



  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&query=${inputValue}`)
      .then(response => response.json())
      .then(data => {
        setResult(data.results)

      })

    // fetch(`https://api.themoviedb.org/3/${result}/movie/list?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`)
    //   .then(response => response.json())
    //   .then(data => {
    //     setResult(data.genres.name)

    //   })

      // fetch(`https://api.themoviedb.org/3/discover/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&with_genres=${selectedGenre}`
      // )
      // .then(response => response.json())
      // .then(data => {
      //   setResult(data.results.)
      // })
     





  }, [page, inputValue, result])

  // https://api.themoviedb.org/3/genre/movie/list?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US



  return (
    <Layout inputHandler={inputHandler}>

      <Routes>
        <Route path='/' element={<Home inputValue={inputValue} result={result} nextPage={nextPage} prevPage={prevPage} page={page}  />} />
        {/* <Route path="/search" element={<SearchResults result={result} />} /> */}
        <Route path="/:movie_id" element={<MovieDetails result={result} inputValue={inputValue} inputHandler={inputHandler} />} />
        <Route path="/adventure" element={<Adventure inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/action" element={<Action inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/animation" element={<Animation inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/comedy" element={<Comedy inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/crime" element={<Crime inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/documentary" element={<Documentary inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/drama" element={<Drama inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/family" element={<Family inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/fantasy" element={<Fantasy inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/history" element={<History inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/horror" element={<Horror inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/music" element={<Music inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/mystery" element={<Mystery inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/romance" element={<Romance inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/Science%20Fiction" element={<Sifi inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/thriller" element={<Thriller inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/TV%20Movie" element={<TVMovie inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/war" element={<War inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        <Route path="/western" element={<Western inputValue={inputValue} result={result} inputHandler={inputHandler} page={page} nextPage={nextPage} prevPage={prevPage} />} />
        
      </Routes>


      
    </Layout>
  );
}

export default App;
