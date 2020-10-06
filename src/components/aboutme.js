import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import isabellaportait from '../images/selfportrait.svg'
import Portrait from './portrait' 
import '../App.css';

class AboutMe extends React.Component { 
  render() {
    return (
      <Container fluid className="bg-lavender">
        <Row className="justify-content-md-center p-5 vh-100">           
          <Col sm={12} md={5} className="my-auto">
            <h1 className="title-lg">
              OM MIG
            </h1>
            <div className="text-md">
              <p>
                Som person är jag positiv, lättsam och pålitlig (har exempelvis bara försovit mig en
                gång och det var för att väckarklockan vägrade ringa). Jag är också bra på att se
                det bästa i människor och hjälper gärna andra. På IKEA är det ofta ett högt tempo
                och ibland upprörda kunder men jag brukar vara bra på att hålla mig lugn i både
                stressiga och obekväma situationer. Förutom detta kan väl nämnas att jag tycker
                om att arbeta tillsammans med andra, såsom i grupparbeten i skolan eller under
                en stressig helg på IKEA. Det är alltid skönt att kunna bolla sina tankar med någon! 
              </p>
              <p>
                I framtiden hoppas jag att jag har ett givande jobb där man får göra många olika
                saker och där man utvecklas varje dag. Jag tror också att jag är en uppskattad
                kollega som man kan komma till om man behöver hjälp eller stöd. Förutom detta
                älskar jag att lära mig nya saker (därav mina sex år på högskola) och fortsätter
                gärna så hos er. Jag uppskattar kombinationen av det kreativa/visuella och det
                tekniska så jag jobbar gärna med båda delar om det finns möjlighet.
              </p>
            </div>
          </Col>
          <Col sm={12} md={4} className="my-auto">
            <Portrait imgSrc={isabellaportait} tooltip="Nämen hejsan!" tooltipPosition="right" styling="selfportrait pl-5"/>
          </Col>   
        </Row>
      </Container>
    );
  }
}

export default AboutMe;