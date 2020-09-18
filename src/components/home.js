import React from 'react';
import logo from '../images/skull.svg';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';

function Home() {
  return (
    <Container fluid>
      <Row className="justify-content-md-center">
        <Col md={4}>
          <h1>
            TJENAAAA
          </h1>
          <p>
            här har vi lite text, hej hej hej
          </p>
        </Col>
        <Col md={4}>
          <img src={logo} className="logo" alt="logo" />
        </Col>       
      </Row>
    </Container>
  );
}

export default Home;