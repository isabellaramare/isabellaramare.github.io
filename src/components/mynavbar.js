import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css';

class MyNavbar extends React.Component { 
  render() {
    return (
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link defaultValue active href="/home">home</Nav.Link>
            <Nav.Link href="/resume">resume</Nav.Link>
            <Nav.Link href="/aboutme">about me</Nav.Link>
            <NavDropdown title="projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="/action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/home">ISABELLA RAMARE</Navbar.Brand>
      </Navbar>
    );
  }
}

export default MyNavbar;