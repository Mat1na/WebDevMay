import React from 'react'
import { Card } from 'react-bootstrap'

function MovieCard({movie}) {
  return (
    <Card>
    <Card.Img variant="top" src="https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
       {console.log(movie)}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  )
}

export default MovieCard
