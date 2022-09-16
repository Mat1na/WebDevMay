import React from 'react'
import { Navbar,Container, Nav } from 'react-bootstrap'
import { Link} from "react-router-dom";


function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ToDo App</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className="nav-link text-decoration-none">Home</Link>
            <Link to="/about" className="nav-link text-decoration-none">About</Link>
           
          </Nav>
        </Container>
      </Navbar>
      
          </>
  )
}

export default NavBar
