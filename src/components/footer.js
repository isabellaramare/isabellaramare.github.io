import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import carlitos from '../images/Ricos de Carlitos Color.png'
import logo from '../images/skull-invert.svg';
import portrait from '../images/isabella portrait.png'
import ScrollToTop from './scrolltotop';

class Projects extends React.Component { 
  
  render() {
    return (
        <Row className="justify-content-center vh-10 ">
          <Col md={5} sm={12} className="my-md-auto text-center user-select-none">
            Isabella Ramare
          </Col>        
          <Col md={5} sm={12} className="my-auto text-center user-select-none">
            isabella.ramare@hotmail.com
          </Col>   
        </Row> 

    );
  }
}

export default Projects;