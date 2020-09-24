import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';

class ContactForm extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
 }

  setRandomNumber() {
    this.setState({ number: Math.random() * 100000 | 0 })
  }

  // TODO
  // gör så att skicka-knappen ändrar text till "Skickar..." och inte går att klicka på medans mail skickas. 
  // validera input i formuläret (t.ex. ska det inte gå att skicka om inte alla fält är ifyllda)

  sendEmail(e) {     
    this.setRandomNumber()       
    var service_id = "contact_ramare";
    var template_id = "contact_form";
    var user_id = "user_vg7OeUzmz8qbEl1cSynsa"
    e.preventDefault();        

    emailjs.sendForm(service_id, template_id, e.target, user_id)
    .then(function(){ 
      alert("Skickat!");       
    }, function(err) {
      alert("Försändelsen misslyckades!\r\n Response:\n " + JSON.stringify(err));       
    });
    return false;    
  }

  render() {     
    const isButtonDisabled = this.state.isButtonDisabled;
    return(
        <Form id="contact-form" onSubmit={this.sendEmail}>
           <Form.Group>
            <Form.Control type="hidden" name="contact_number" value={this.state.number} />
          </Form.Group> 
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Din mailadress</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="user_email"/>
              </Form.Group>
            </Col>
            <Col>
              <Form-Group controlId="formBasicName">
                <Form.Label>Ditt namn</Form.Label>
                <Form.Control placeholder="Anna Nyhm" name="user_name"/> 
              </Form-Group>
            </Col>
            <Col>
              <Form-Group controlId="formBasicSubject">
                <Form.Label>Ämne</Form.Label>
                <Form.Control placeholder="Meddelandets ämne" name="subject"/> 
              </Form-Group>             
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Meddelande</Form.Label>
                <Form.Control className="message" as="textarea" placeholder="Skriv ditt meddelande här!" name="message"/>
              </Form.Group>
            </Col>
          </Row>  
          <Button className="mt-3" variant="outline-primary" type="submit" disabled={isButtonDisabled} onClick={this.handleClick}>
            {this.state.buttonText}
          </Button> 
        </Form>       
    )
  } 
}

export default ContactForm; 


