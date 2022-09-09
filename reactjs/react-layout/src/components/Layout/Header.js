import React from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header({ searchResultHandler, inputHandler }) {
  const x = useNavigate();
  const RedirectToHome = (e) => {
    if (e.key === "Enter") {
      return x("/");
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="nav ">
      <Container>
        <Navbar.Brand href="/">MovieBlender</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to={"/"} className="nav-link text-decoration-none">
              Homepage
            </Link>

            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <Link
                to={"/search"}
                onClick={searchResultHandler}
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
              <Link
                to={"/action"}
                className="dropdown-item text-decoration-none"
              >
                Action
              </Link>
              <Link
                to={"/thriller"}
                className="dropdown-item text-decoration-none"
              >
                Thriller
              </Link>
              <Link
                to={"/fantasy"}
                className="dropdown-item text-decoration-none"
              >
                Fantasy
              </Link>
              <Link
                to={"/animation"}
                className="dropdown-item text-decoration-none"
              >
                Animation
              </Link>
            </NavDropdown>
          </Nav>
          <Nav className="d-flex flex-row">
            <Form className="d-flex flex-row pt-2">
              <Form.Control
                onChange={inputHandler}
                type="search"
                onKeyDown={RedirectToHome}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav className="d-flex flex-row pt-2">
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


