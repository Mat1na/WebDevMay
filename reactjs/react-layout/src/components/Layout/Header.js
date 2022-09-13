import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, NavDropdown, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Header({
  searchResult,
  inputHandler,
  selectedGenre,
  setSelectedGenre,
}) {
  const [allGenres, setAllGenres] = useState([]);

  const x = useNavigate();
  const RedirectToHome = (e) => {
    if (e.key === "Enter") {
      return x("/");
    }
  };
  useEffect(() => {
    async function fetchAllGenres() {
      let res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=07a61de5b731a869bc9cec8e25d2c8a8&language=en-US"
      );
      let data = await res.json();
      setAllGenres(data.genres);
    }
    console.log(allGenres);
    fetchAllGenres();
  }, []);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="nav "
    >
      <Container>
        <Navbar.Brand href="/">MovieBlender</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto ">
            <Link to={"/"} className="nav-link text-decoration-none">
              Homepage{console.log(allGenres)}
            </Link>

            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              {allGenres.map((genre, value) => (
                <Link
                  to={`/${genre.name}`}
                  className="dropdown-item text-decoration-none"
                  value={genre.id}
                >
                  {genre.name}
                </Link>
              ))}

              {/* <Link
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
              </Link> */}
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
