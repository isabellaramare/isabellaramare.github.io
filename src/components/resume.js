import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';

class Resume extends React.Component { 
  render() {
    return (
      <Container fluid className="bg-lavender">
        <Row className="justify-content-md-center p-5 vh-100">
          <Col sm={6} md={4} className="my-auto">
            <h1>
              RESUME
            </h1>
            <p>
              här har vi lite text, hej hej hej
            </p>
          </Col>
          <Col sm={6} md={4} className="my-auto">
         
          </Col>       
        </Row>
      </Container>
    );
  }
}

export default Resume;