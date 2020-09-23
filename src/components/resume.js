import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import portrait from '../images/isabella portrait.png'
import '../App.css';

class Resume extends React.Component { 
  render() {
    return (
      <Container fluid className="bg-tilt">
        <Row className="justify-content-md-center p-5 vh-100">
          <Col sm={6} md={6} className="padding-top">
            <h1 className="title-lg">
              RESUME 
              <span className="text-light"> RESUME</span>
            </h1>
            <div className="text-lg pr-5">
              <p>
                I början av juni avslutade jag min utbildning till systemutvecklare 
                och letar nu efter ett roligt och givande jobb där jag kan fortsätta utvecklas och lära mig nya saker.
              </p>
              <p >
                Med mig som anställd får ni en snabblärd medarbetare
                med breda kunskaper inom allt från programmering och systemutveckling till visualisering, bild och videoproduktion.
              </p>
            </div>
          </Col>
          <Col sm={6} md={4} className="padding-top">
          <img 
            src={portrait} 
            className="logo rounded-circle" 
            alt="isabella portrait" />
          </Col>       
        </Row>

        <Row className="justify-content-md-center padding-top bg-spots vh-100">
          <Row className="justify-content-md-center p-5">
            <Col sm={10} md={5} className="p-5 bg-white">
              <h3>2017 - 2020</h3>
              <h1>KANDIDATEXAMEN I INFORMATIK</h1>
              <h2>SYSTEMUTVECKLING SAMHÄLLE OCH IT</h2>
              <h3>HÖGSKOLAN VÄST, TROLLHÄTTAN</h3>
            </Col>
            <Col sm={10} md={5} className="p-5 bg-white">
              <p>
                Har under studieperioden lärt mig programmera 
                i flera olika språk, främst C# (.Net) 
                men har även använt Java, JavaScript och PHP. 
                Vi fick även göra hemsidor (med HTML och CSS), 
                appar, databaser och e-tjänster, i flera fall 
                utifrån verkliga case då utbildningen strävar 
                efter ett arbetsintegrerat lärande. Vi utformade 
                även system med hjälp av processkartor och 
                processmodellering. Under denna period satt jag 
                också med i programrådet och hjälpte till att forma 
                utbildningen efter elevernas önskemål.
              </p>
            </Col>
          </Row>
          <Row className="justify-content-md-center p-5">
            <Col sm={10} md={5} className="p-5 bg-white">
              <h3>2017 - 2020</h3>
              <h1>KANDIDATEXAMEN I INFORMATIK</h1>
              <h2>SYSTEMUTVECKLING SAMHÄLLE OCH IT</h2>
              <h3>HÖGSKOLAN VÄST, TROLLHÄTTAN</h3>
            </Col>
            <Col sm={10} md={5} className="p-5 bg-white">
              <p>
                Har under studieperioden lärt mig programmera 
                i flera olika språk, främst C# (.Net) 
                men har även använt Java, JavaScript och PHP. 
                Vi fick även göra hemsidor (med HTML och CSS), 
                appar, databaser och e-tjänster, i flera fall 
                utifrån verkliga case då utbildningen strävar 
                efter ett arbetsintegrerat lärande. Vi utformade 
                även system med hjälp av processkartor och 
                processmodellering. Under denna period satt jag 
                också med i programrådet och hjälpte till att forma 
                utbildningen efter elevernas önskemål.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default Resume;