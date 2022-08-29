import React from 'react'
import { Card } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function MovieCard({ movie }) {
  return (
    //   <Card>
    //   <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg" />
    //   <Card.Body>
    //     <Card.Title>Card title</Card.Title>
    //     <Card.Text>
    //      {console.log(movie)}
    //     </Card.Text>
    //   </Card.Body>
    //   <Card.Footer>
    //     <small className="text-muted">Last updated 3 mins ago</small>
    //   </Card.Footer>
    // </Card>

    <ul className="movies bg-dark  p-0 ">
      <li key="1">
        <div className="movie">
          <figure className="movie__figure"><Link to={`/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} class="movie__poster w-100"/> </Link>
            <figcaption><span className="movie__vote">{movie.vote_average}</span></figcaption>
            <h2 className="movie__title ">{movie.title}</h2>
          </figure>
        </div>
      </li>
    </ul>

  )
}

export default MovieCard
