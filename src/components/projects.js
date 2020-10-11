import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import '../App.css';
import carlitos from '../images/Ricos de Carlitos Color.png'
import logo from '../images/skull-invert.svg';
import portrait from '../images/isabella portrait.png'

class Projects extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        currentSlide: 0
    };
    this.changeSlide = this.changeSlide.bind(this);
  }

  handleClick(scrollTo) {
    var elmnt = document.getElementById(scrollTo);
    elmnt.scrollIntoView();
  }

  changeSlide() {
    var slides = document.querySelectorAll('#slides .slide');
    var currentSlide = this.state.currentSlide;
    slides[currentSlide].className = 'slide';
    var newSlide = (currentSlide + 1)%slides.length;
    this.setState({
      currentSlide: newSlide
    });
    slides[newSlide].className = 'slide showing';
  }

  

  render() {
    return (
      <Container fluid className="full-width pt-extra bg-spots-blask">
        <Row className="justify-content-center vh-min-100">
          <Col md={5} sm={12} className="my-auto text-center user-select-none">
            <button onClick={(e) => this.handleClick('artwork')} className="projects-link title-lg"><strong>illustration & design</strong></button>
          </Col>   
          <Col md={5} sm={12} className="my-auto text-center user-select-none">
            <button onClick={(e) => this.handleClick('code')} className="projects-link title-lg"><strong>programmering & systemutveckling</strong></button>
          </Col>        
        </Row> 
        <Row id="artwork" className="justify-content-center vh-min-100 bg-purple">
          <Col md={11} sm={12} className="my-auto">            
            <ul id="slides">
              <li className="slide showing">
                <Row className="h-100 pl-5">
                  <Col md={2} className="my-auto pl-5 mr-5 text-pink">
                    <h1 className="title-lg">illustration & design</h1>
                  </Col>
                  <Col md={2} className="my-auto">
                    <img src={logo} />
                  </Col>
                </Row>
              </li>
              <li className="slide">
                <Row className="justify-content-center bg-lavender">
                  <Col md={6} sm={12} className="my-auto p-5">
                    <img className="w-100" src={carlitos} />
                  </Col>
                  <Col md={6} sm={12} className="my-auto">
                    <p>
                      jrekngj ej fkew wm nnf 4nq4nnk q
                    </p>
                  </Col>
                </Row>
              </li>
              <li className="slide">third slide</li>
            </ul>
          </Col>  
          <Col md={1} sm={0} className="my-auto bg-pink full-width p-0">
            <button className="btn-next" onClick={this.changeSlide}>
              <h1 className="title-lg">
                <strong>
                  &gt;
                </strong>
              </h1>
            </button>
          </Col>
        </Row>      
        <Row id="code" className="justify-content-center min-vh-100">
          <Col md={10} sm={12} className="my-auto pt-5">
            <div className="slider pt-md-5 pb-2">          
              <div className="slides">
                <Row className="p-md-5 p-sm-0" id="slide-1">
                  <Col md={6}>
                    <img className="w-100 p-md-5 p-sm-0" src={portrait} />
                  </Col>
                  <Col md={6}>
                    <h1>isabella portrait</h1>
                  </Col>
                </Row>
                <Row className="p-md-5 p-sm-0" id="slide-2">
                  <Col md={6}>
                    <img className="w-100 p-md-5 p-sm-0" src={portrait} />
                  </Col>
                  <Col md={6}>
                    <h1>isabella portrait</h1>
                  </Col>
                </Row>
                <Row className="p-md-5 p-sm-0" id="slide-3">
                  <Col md={6}>
                    <img className="w-100 p-md-5 p-sm-0" src={logo} />
                  </Col>
                  <Col md={6}>
                    <h1>skull logo</h1>
                  </Col>
                </Row>
              </div>
              <a href="#slide-1">1</a>
              <a href="#slide-2">2</a>
              <a href="#slide-3">3</a>
              <a href="#slide-4">4</a>
              <a href="#slide-5">5</a>
            </div>            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;