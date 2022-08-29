import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Blueberry</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link text-decoration-none">
              Homepage
            </Link>
            
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <Link
                to={"/adventure"}
                className="dropdown-item text-decoration-none"
              >
                Adventure
              </Link>
              <Link
                to={"/comedy"}
                className="dropdown-item text-decoration-none"
              >
                Comedy
              </Link>
            </NavDropdown>
          </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

/*
background: #f09433; 
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
*/
