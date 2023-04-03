import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilm
} from "@fortawesome/free-solid-svg-icons";

import Container from 'react-bootstrap/Container';

function NavB() {
  return (
    <Navbar style={{ display: "flex", justifyContent: "space-between" }} className="nav" bg="blue" expand="md" sticky="top" variant="dark" >
      <Container>
      <FontAwesomeIcon className="p-2 text-white" icon={faFilm} size="2x" />
        <Navbar.Brand href="/" style={{color:"white"}}>YourMovie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto">
            
            <Nav.Link href="/" style={{color:"white"}}>Home</Nav.Link>

            <Nav.Link href="/contact" style={{color:"white"}}>Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavB