import React, { useEffect, useState } from "react";
import { Badge, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState("");
  // https://api.themoviedb.org/3/movie/616037?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US
  // https://api.themoviedb.org/3/movie/616037/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US

  const { movie_id } = useParams();
  // async func
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetail(data);
      });

    fetch(
      ` https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieTrailer(data.results[0].key);
      });
  }, [movie_id]);

  return (
    <Container className="bg-dark p-0 m-0  " fluid={true}>
      <Row className="p-4 m-0 bg-dark text-white movie-img justify-content-center align-items-center">
      <h1 className="text-center movie-title pb-3">{movieDetail.title}</h1>
        <Col md={4} className="p-3 d-flex justify-content-center details">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt=""
          />
        </Col>
        <Col md={8} className="">
          <Row className="p-0  m-0 bg-dark text-white movie-img align-items-center">
          <h1 className="text-start ">Overview</h1>
          <p>{movieDetail.overview}</p>
            <Col md={4} className=" p-3 d-flex justify-content-center details">
              <ListGroup >
                <ListGroup.Item className="bg-none text-light border-0 px-0">
                  <Badge bg="warning  w-100" text="dark">
                    Imdb Score:{" "}
                    <p className=" d-inline">
                      {Math.floor(movieDetail.vote_average)}
                    </p>
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="bg-none text-light border-0 px-0">
                  <Badge bg="warning  w-100" text="dark">
                    Movie Language:{" "}
                    <p className=" d-inline">
                      {movieDetail.original_language !== undefined
                        ? movieDetail.original_language.toUpperCase()
                        : ""}
                    </p>
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="bg-none text-light border-0 px-0">
                  <Badge bg="warning w-100" text="dark">
                    Category:{" "}
                    <p className="">
                      {movieDetail.genres !== undefined
                        ? movieDetail.genres.map((cat, index) => (
                            <>
                              <p className="d-inline" key={cat.id}>
                                {cat.name}
                                {" || "}
                              </p>
                            </>
                          ))
                        : ""}
                    </p>
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item className="bg-none text-light border-0 px-0">
                  <Badge bg="warning w-100" text="dark">
                    Production:{" "}
                    <p className=" ">
                      {movieDetail.production_companies !== undefined
                        ? movieDetail.production_companies.map((prod) => (
                            <>
                              <hr />
                              <p className="d-inline" key={prod.id}>
                                <a href={movieDetail.homepage}>{prod.name} </a>
                              </p>
                            </>
                          ))
                        : ""}
                    </p>
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={8} className="p-3 d-flex justify-content-center details ">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${movieTrailer}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
