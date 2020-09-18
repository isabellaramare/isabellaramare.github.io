import React from 'react';
import logo from '../images/skull.svg';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
        <h1>
          TJENAAAA
        </h1>
        <p>
          här har vi lite text, hej hej hej
        </p>
        </Col>
        <Col>
          <img src={logo} className="App-logo" alt="logo" />
        </Col>       
      </Row>
    </Container>
  );
}

export default Home;