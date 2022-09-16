import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'


function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ToDo App</Navbar.Brand>
          <Nav className="responsive-navbar-nav">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
      
          </>
  )
}

export default NavBar
