import React from 'react'
import { Card } from 'react-bootstrap'

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

    <ul className="movies">
      <li key="1">
        <div className="movie">
          <figure className="movie__figure"><img src="https://image.tmdb.org/t/p/w500${}" class="movie__poster"/>
            <figcaption><span className="movie__vote">4.5</span></figcaption>
            <h2 className="movie__title">Godzilla vs. Kong</h2>
          </figure>
        </div>
      </li>
    </ul>

  )
}

export default MovieCard
