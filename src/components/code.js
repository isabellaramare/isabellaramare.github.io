import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import Logo from '../images/skull.svg';

class Code extends React.Component { 
  render() {
    return (
      <Container fluid className="full-width pt-extra bg-spots-blask ">
        <Row className="vh-100 justify-content-center">
          <Col md={10} className="my-auto">
            <h2 className="title-lg"><strong>illustration & design</strong></h2>
          </Col>          
        </Row>
        <Row className="mt-5">
          <Col sm={10} md={4} className="bg-white-80 rounded-left p-4">
            
          </Col>
          <Col sm={10} md={4} className="bg-white text-md rounded-right p-3">
            <p className="p-2">
              Lärde mig under denna studieperiod programmera 
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
        <Row className="mt-5">
          <Col sm={10} md={4} className="bg-white-80 rounded-left p-4">
           
          </Col>
          <Col sm={10} md={4} className="bg-white text-md rounded-right p-3">
            <p className="p-2">
              Lärde mig under denna studieperiod programmera 
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
      </Container>
    );
  }
}

export default Code;