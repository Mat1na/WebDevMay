import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, CardGroup, Container } from "react-bootstrap";
import CarouselComponent from "./components/Homepage/CarouselComponent";
import MovieCard from "./components/Homepage/MovieCard";

function Home({ inputValue, result, page, nextPage, prevPage }) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}`
    );
    let data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchMovies();

  }, [page]);

  return (
    <>
     <div>
        <CarouselComponent />
        <Container fluid={true} className=" bg-dark home  pt-5">
        <CardGroup
          className="bg-dark justify-content-space-between movies pt-5 home2"
          fluid={true}>
          {
            inputValue !== '' && result !== undefined ?
              result.map((movie, index) => (
                <MovieCard movie={movie} key={index} test={'this is a test props data'} />
              ))
              :
              (
                movies !== undefined ?
                  movies.map((movie, index) => (
                    <MovieCard movie={movie} key={index} test={'this is a test props data'} />
                  ))
                  :
                  ''
              )
          }
          {/* {movies != undefined
          ? movies.map((movie) => <MovieCard movie={movie} />)
          : ""} */}
        </CardGroup>

        <div className="pagination bg-dark d-flex justify-content-center">
          <ButtonGroup aria-label="" className="pb-3">
            <Button
              variant="  btn btn-outline-light m-1 px-5 "
              onClick={prevPage}
            >
              Prev
            </Button>
            <Button variant="outline-light  m-1 px-5" onClick={() => {
              nextPage()

            }}>
              Next
            </Button>
          </ButtonGroup>
        </div>
      </Container></div>
    </>
  );
}

export default Home;


