import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import carlitos from '../images/Ricos de Carlitos Color.png'
import logo from '../images/skull-invert.svg';
import portrait from '../images/isabella portrait.png'
import ScrollToTop from './scrolltotop';

class Projects extends React.Component { 
  handleClick(scrollTo) {
    var element = document.getElementById(scrollTo);
    
    try {
      element.scrollIntoView();
    }

    catch {

    }
  }

  render() {
    return (
      <Container id="top" fluid className="full-width bg-spots-blask">
        <Row className="justify-content-center vh-min-100 pt-extra">
          <Col md={5} sm={12} className="my-auto text-center user-select-none">
            <button onClick={(e) => this.handleClick('artwork')} className="projects-link title-lg w-100"><strong>illustration <br/>& design</strong></button>
          </Col>   
          <Col md={5} sm={12} className="my-md-auto text-center user-select-none">
            <button onClick={(e) => this.handleClick('code')} className="projects-link title-lg w-100"><strong>programmering <br/>& utveckling</strong></button>
          </Col>        
        </Row> 
        <Row id="artwork" className="justify-content-center vh-min-100 bg-purple">
          
        </Row>      
        <Row id="code" className="justify-content-center vh-min-100 no-gutters">
          
        </Row>
        <ScrollToTop/> 
      </Container>
    );
  }
}

export default Projects;