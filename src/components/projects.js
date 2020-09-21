import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';

class Projects extends React.Component { 
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col sm={6} md={4}>
            <h1>
              CV
            </h1>
            <p>
              här är mitt CV
            </p>
          </Col>
          <Col sm={6} md={4}>

          </Col>       
        </Row>
      </Container>
    );
  }
}

export default Projects;