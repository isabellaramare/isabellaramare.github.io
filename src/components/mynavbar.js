import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'
import '../App.css';
import SkullLogo from './skulllogo';

class MyNavbar extends React.Component {
  constructor(props){
    super(props);
    this.state = { activeLink: 'home' };
  }

  // TODO:
  // link only gets active if you click it (not when typing the adress or pressing 'previous page')
  handleClick(linkName) {
    this.setState({
      activeLink: linkName
    })
  }

  render() {
    return(
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey={this.props.location.pathname} className="mr-auto">
            <Nav.Link onClick={(e) => this.handleClick('home')} className={(this.state.activeLink === 'home') ? 'active' : ''} defaultValue href="#/home">hem</Nav.Link>
            <Nav.Link onClick={(e) => this.handleClick('resume')} className={(this.state.activeLink === 'resume') ? 'active' : ''} href="#/resume">cv</Nav.Link>
            <Nav.Link onClick={(e) => this.handleClick('aboutme')} className={(this.state.activeLink === 'aboutme') ? 'active' : ''} href="#/aboutme">om mig</Nav.Link>
            <Nav.Link onClick={(e) => this.handleClick('projects')} className={(this.state.activeLink === 'projects') ? 'active' : ''} href="#/projects">projekt</Nav.Link>
            <Nav.Link onClick={(e) => this.handleClick('contact')} className={(this.state.activeLink === 'contact') ? 'active' : ''} href="#/contact">kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="brand" href="#/home">ISABELLA RAMARE</Navbar.Brand>
      </Navbar>
    );
  }
}

export default MyNavbar;