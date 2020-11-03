import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import skeleton from '../images/shadow-skeleton.svg'
import Portrait from './portrait' 
import '../App.css';

class AboutMe extends React.Component { 
  render() {
    return (
      <Container fluid className="bg-spots-blask pt-extra overflow-hidden">
        <Row className="justify-content-md-center vh-100">           
          <Col sm={12} md={3} className="bg-lilac">
            <img src={skeleton} className="skeleton"/>
          </Col>   
          <Col sm={12} md={6} className="my-auto">
            <p className="text-md">
              Som person är jag positiv, lättsam och pålitlig (har exempelvis bara försovit mig en
              gång och det var för att väckarklockan vägrade ringa). Jag är också bra på att se
              det bästa i människor och hjälper gärna andra. På IKEA är det ofta ett högt tempo
              och ibland upprörda kunder men jag brukar vara bra på att hålla mig lugn i både
              stressiga och obekväma situationer. Förutom detta kan väl nämnas att jag tycker
              om att arbeta tillsammans med andra, såsom i grupparbeten i skolan eller under
              en stressig helg på IKEA. Det är alltid skönt att kunna bolla sina tankar med någon!            
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutMe;