import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, CardGroup, Container } from "react-bootstrap";
import CarouselComponent from "./components/Homepage/CarouselComponent";
import MovieCard from "./components/Homepage/MovieCard";

function Home({ inputValue, result }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => {
    if (page <= 1) {
      return;
    } else {
      setPage(page - 1);
    }
  };

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
    <Container fluid={true} className="p-0 ">
      <CarouselComponent />
      {console.log(movies)}
      {
          console.log(inputValue,"this is input value")
        }
      
      <CardGroup
        className="bg-dark justify-content-space-between movies p-3"
        fluid={true}>
       {
          inputValue!=='' && result !==undefined?
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
            variant=" rounded-0 btn btn-outline-light m-1 px-5 "
            onClick={prevPage}
          >
            Prev
          </Button>
          <Button variant="outline-light rounded-0 m-1 px-5" onClick={nextPage}>
            Next
          </Button>
        </ButtonGroup>
      </div>
    </Container>
  );
}

export default Home;
