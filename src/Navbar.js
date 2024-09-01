import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './styles.css'; // Import file CSS

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home" className="brand-left">Xenza Dashboard</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link href="#investasi" className="button-link">Investasi</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
