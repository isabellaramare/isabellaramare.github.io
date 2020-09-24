import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Logo from './skulllogo'
import '../App.css';

class Home extends React.Component { 
  render() {
    return(
      <Container fluid className="bg-spots-blask full-width">
        <Row className="justify-content-md-center p-5 vh-100 user-select-none">
          <Col sm={6} md={6} className="my-auto fade-in">
            <h1 className="title-lg">
              Letar du efter en <span className="text-light">systemutvecklare?</span>
            </h1>
            <p className="text-lg">
              Då har du kommit rätt! <br/>Klicka nedan för att se mina tidigare projekt.
            </p>
            <Button className="mt-4" size="lg" href="#/projects" variant="outline-purple">projekt</Button>
          </Col>
          <Col sm={6} md={4} className="my-auto">
           <Logo />
          </Col>       
        </Row>
      </Container>
    );
  }
}

export default Home;