import { Navbar, Nav, Container } from 'react-bootstrap';

function NavbarComp() {
  return (
      <>
      <Navbar bg="dark" variant="dark" sticky="top" className="container" id="navbar-outline">
        <Container id="nav-container">
          <Navbar.Brand href="#home" id="nav-brand">
            💵 My Money
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#" id="nav-link">Contacts</Nav.Link>
            <Nav.Link href="#" id="nav-link">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;