import React from 'react'
import { Container } from 'react-bootstrap'
import CarouselComponent from './components/Homepage/CarouselComponent'

function Home() {
  return (
    <Container fluid={true} className="p-0">
      <CarouselComponent />
    </Container>
  )
}

export default Home