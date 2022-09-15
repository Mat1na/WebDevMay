import React, { useEffect, useState } from 'react'
import { Button, ButtonGroup, CardGroup,Container } from 'react-bootstrap';
import MovieCard from './components/Homepage/MovieCard';
import CarouselComponent from "./components/Homepage/CarouselComponent";
import { useParams } from 'react-router-dom';

function GenreSearch({inputValue,result,page,prevPage,nextPage,}) {
const{genre}=useParams()
const [movies, setMovies] = useState([]);

const fetchMovies = async () => {
  let res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US&page=${page}&with_genres=${genre}`
  );
  let data = await res.json();
  setMovies(data.results);
 
};


useEffect(() => {
    
  
    fetchMovies()
   
  }, [page,genre]);



  return (
<>
      <div>

        <CarouselComponent />

        <Container fluid={true} className=" bg-dark home  pt-5">
       <div className="pt-0 pages"> <p className="searchresults m-2 text-white ">Page {page} of results</p>
       </div>
     
          <CardGroup
            className="bg-dark justify-content-space-between movies pt-5 home2"
            fluid={true}>

            {
              inputValue !== '' && result !== undefined ?
                result.map((movie, index) => (
                  <MovieCard movie={movie} key={index}  />
                ))
                :
                (
                  movies !== undefined ?
                    movies.map((movie, index) => (
                      <MovieCard movie={movie} key={index}  />
                    ))
                    :
                    ''
                )
            }
       
          </CardGroup>

          <div className="pagination bg-dark d-flex justify-content-center">
        
            <ButtonGroup aria-label="" className="pb-3">
              <Button
                variant="  btn btn-outline-light m-1 px-5 "
                onClick={prevPage}
              >
                Prev
              </Button>
              <Button variant="outline-light  m-1 px-5" onClick={() => {nextPage()}}>
               
                Next
              </Button>
            </ButtonGroup>
          </div>
        </Container></div>
    </>
  )
}

export default GenreSearch