import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';

class Code extends React.Component { 
  render() {
    return (
      <Container fluid className="full-width pt-extra bg-spots-blask">
      <Row className="justify-content-center user-select-none vh-100">
        <Col sm={12} md={5} className="my-auto justify-content-center">
         
        </Col>
        <Col sm={12} md={4} className="my-auto p-5 bg-spots-blask">
        
        </Col>       
      </Row>
    </Container>
    );
  }
}

export default Code;