import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import Container from 'react-bootstrap/Container';

function NavB() {
  return (
    <Navbar className="nav" bg="dark" expand="lg" sticky="top" >
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>YourMovie</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="#home" style={{color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#link" style={{color:"white"}}>Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavB