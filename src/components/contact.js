import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../App.css';
import ContactForm from './contactform';

class Contact extends React.Component { 
  render() {
    return (
      <Container fluid className="bg-spots-blask full-width">
        <Row className="justify-content-md-center vh-min-100 py-5">
          <Col sm={12} md={6} className="my-auto pt-5">
            <h1 className="title-lg text-white">Skriv och säg hej!</h1>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contact;