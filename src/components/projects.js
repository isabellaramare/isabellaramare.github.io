import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';

class Projects extends React.Component { 

  handleClick(scrollTo) {
    var elmnt = document.getElementById(scrollTo);
    elmnt.scrollIntoView();
  }

  render() {
    return (
      <Container fluid className="full-width pt-extra bg-spots-blask">
        <Row className="justify-content-center vh-min-100">
          <Col md={5} className="my-auto text-center user-select-none">
            <button onClick={(e) => this.handleClick('artwork')} className="projects-link title-lg"><strong>illustration & design</strong></button>
          </Col>   
          <Col md={5} className="my-auto text-center user-select-none">
            <button onClick={(e) => this.handleClick('code')} className="projects-link title-lg"><strong>programmering & systemutveckling</strong></button>
          </Col>        
        </Row> 
        <Row id="artwork"className="justify-content-center vh-min-100 bg-purple">
          <Col className="my-auto">
            <h1 >illustration & design</h1>
          </Col>
        </Row>      
        <Row id="code" className="justify-content-center vh-min-100">
          <Col className="my-auto">
            <h1>programmering & systemutveckling</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;