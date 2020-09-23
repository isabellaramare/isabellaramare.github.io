import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Logo from './skulllogo'
import '../App.css';

class Home extends React.Component { 
  render() {
    return(
      <Container fluid className="bg-lavender full-width">
        <Row className="justify-content-md-center p-5 vh-100">
          <Col sm={6} md={6} className="my-auto">
            <h1 className="title-lg">
              hej och <span className="text-light">välkommen</span>
            </h1>
            <p className="text-lg">
              här har vi lite text, hej hej hej
            </p>
            <Button className="mt-4" size="lg" href="#/projects" variant="outline-purple">projects</Button>
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