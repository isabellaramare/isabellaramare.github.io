import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import carlitos from '../images/Ricos de Carlitos Color.png'
import logo from '../images/skull-invert.svg';
import portrait from '../images/isabella portrait.png'

class Slider extends React.Component { 
  currentSlide = 0
  
  handleClick(scrollTo) {
    var element;
    var slides = document.getElementsByClassName('slide')

    if (scrollTo === 'next') {
      this.currentSlide += 1
      element = slides[this.currentSlide]
      console.log(this.currentSlide)
    }

    else if (scrollTo === 'previous') {
        this.currentSlide -= 1;
        element = slides[this.currentSlide]
    }

    else {
      element = document.getElementById(scrollTo);
    }

    try {
      element.scrollIntoView();
    }

    catch {

    }


    switch (this.currentSlide) {
      case 0: 
        document.getElementById('btn-previous').style.visibility = 'hidden'
        document.getElementById('btn-next').style.visibility = 'visible'
      break;

      case 1: 
        document.getElementById('btn-next').style.visibility = 'visible'
        document.getElementById('btn-previous').style.visibility = 'visible'
        break;
      
      case 2: 
        document.getElementById('btn-next').style.visibility = 'hidden'
        document.getElementById('btn-previous').style.visibility = 'visible'
        break;

      default: 
        document.getElementById('btn-next').style.visibility = 'visible'
        document.getElementById('btn-previous').style.visibility = 'visible'
        break;
    }
  }

  render() {
    return ( 
        <Row className="min-vh-100 justify-content-center no-gutters">
          <Col md={1} sm={0} className="my-auto text-center">
            <button id="btn-previous" className="btn-slide" style={{visibility: 'hidden'}} onClick={(e) => this.handleClick('previous')}>&lt;</button>
          </Col>
          <Col md={10} sm={12} className="pt-5 mt-4 my-md-auto">
            <div className="slider">          
              <div className="slides">
                <Row className="slide no-gutters" id="0">
                  <Col sm={12} md={6} className="p-sm-0 p-md-5">
                    <img className="w-100" src={carlitos} />
                  </Col>
                  <Col sm={12} md={6} className="p-sm-0 p-md-5">
                    <h1 className="text-center">Ricos de Carlitos</h1>
                    <p className="text-md">
                      Detta är en logotyp jag skapade åt min bästa väns svärfar som äger en foodtruck i Equador. 
                      Han säljer en Equadoriansk specialitet: Maduros con Queso, matbananer med ost!
                      Med hjälp av referensbilder på svärfadern skapade jag denna logotyp i Illustrator. 
                      Min vän gjorde texten ovan bilden.
                    </p>
                  </Col>
                </Row>
                <Row className="slide no-gutters" id="1">
                  <Col sm={12} md={6} className="p-sm-0 p-md-5">
                    <img className="w-100" src={portrait} />
                  </Col>
                  <Col sm={12} md={6} className="p-sm-0 p-md-5 my-auto">
                    <h1 className="text-center">isabella portrait</h1>
                    <p className="text-md">
                      isabella portrait isabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portrait</p>                 
                  </Col>
                </Row>
                <Row className="slide no-gutters" id="2">
                  <Col sm={12} md={6} className="p-sm-0 p-md-5">
                    <img className="w-100" src={logo} />
                  </Col>
                  <Col sm={12} md={6} className="p-sm-0 p-md-5 my-auto">
                    <h1 className="text-center">isabella portrait</h1>
                    <p className="text-md">
                      isabella portrait isabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portraitisabella portrait</p>
                  </Col>
                </Row>
              </div>
            </div>  
          </Col>
          <Col md={1} sm={0} className="my-auto text-center">
            <button id="btn-next" className="btn-slide" onClick={(e) => this.handleClick('next')}>&gt;</button>          
          </Col>
        </Row>
    );
  }
}

export default Slider;