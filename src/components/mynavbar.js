import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css';

const MyNavbar = props => {
  const { location } = props;
  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav activeKey={location.pathname} className="mr-auto">
          <Nav.Link defaultValue href="#/home">hem</Nav.Link>
          <Nav.Link href="#/resume">cv</Nav.Link>
          <Nav.Link href="#/aboutme">om mig</Nav.Link>
          <NavDropdown title="projekt" id="basic-nav-dropdown">
            <NavDropdown.Item href="#/projects/artwork">illustration & design</NavDropdown.Item>
            <NavDropdown.Item href="#/projects/code">programmering</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#/contact">kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Navbar.Brand className="brand" href="#/home">ISABELLA RAMARE</Navbar.Brand>
    </Navbar>
  );
};

export default MyNavbar;