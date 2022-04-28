import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function NavbarComp() {
  return (
      <>
      <Navbar bg="dark" variant="dark" sticky="top" className="container">
        <Container>
          <Navbar.Brand href="#home">
            💵 My Money
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;