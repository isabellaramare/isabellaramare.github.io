import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Logo from './skulllogo'
import '../App.css';

class Home extends React.Component { 
  render() {
    return(
      <Container fluid className="full-width pt-extra bg-spots-blask">
        <Row className="justify-content-center user-select-none vh-min-100">
          <Col sm={12} md={5} className="my-auto fade-in justify-content-center">
            <h1 className="title-lg text-light">
              Letar du efter en system-utvecklare?
            </h1>
            <p className="text-lg">
              Då har du kommit rätt! Klicka nedan för att se mina tidigare projekt eller kontakta mig direkt!
            </p>
            <Button className="mt-4 btn-block" size="lg" href="#/projects" variant="outline-purple">projekt</Button>
            <Button className="mt-4 btn-block" size="lg" href="#/contact" variant="outline-purple">säg hej!</Button>
          </Col>
          <Col sm={12} md={4} className="my-auto p-5 bg-spots-blask">
           <Logo />
          </Col>       
        </Row>
      </Container>
    );
  }
}

export default Home;