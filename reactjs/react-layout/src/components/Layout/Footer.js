import React from 'react'
import { Container, Nav, Row, Col } from 'react-bootstrap'
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Container className="bg-dark p-0 m-0 footer" fluid={true}>
    <Row className='p-3 m-0  bg-dark text-white movie-img justify-content-center align-items-center'>
      <Col md={8} className="p-0 d-flex justify-content-center details">
     <div className=' bg-dark text-light pt-2'>&copy; 2022 MovieBlender</div>
     </Col>

      <Col md={4} className="p-0 d-flex justify-content-center details">
      
       <Nav className="d-flex flex-row">
            <Link to={"/#social"}>
              <FaTwitter
                fill="white"
                className="display-6 bg-primary p-1 rounded-1 mx-1"
              />
            </Link>
            <Link to={"/#social"}>
              <FaLinkedin
                fill="white"
                className="display-6 bg-primary p-1 rounded-1 mx-1"
              />
            </Link>
            <Link to={"/#social"}>
              <FaInstagram
                fill="white"
                className="display-6 bg-instagram p-1 rounded-1 mx-1"
              />
            </Link>
          </Nav>
    </Col>
    </Row>
    </Container>
  )
}

export default Footer