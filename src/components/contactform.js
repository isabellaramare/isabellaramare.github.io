import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import SubmitButton from './submitbutton';

class ContactForm extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: false,       
    };

  }
 
  // TODO
  // gör så att skicka-knappen ändrar text till "Skickar..." och inte går att klicka på medans mail skickas. 
  // validera input i formuläret (t.ex. ska det inte gå att skicka om inte alla fält är ifyllda)

   sendEmail = async (e) => {   
  
    e.preventDefault();         

      this.setState({isLoading: true}) 

      var service_id = "contact_ramare";
      var template_id = "contact_form";
      var user_id = "user_vg7OeUzmz8qbEl1cSynsa"

      emailjs.sendForm(service_id, template_id, e.target, user_id)
      .then(function(){ 
        alert("Skickat!");       
      }, function(err) {
        alert("Försändelsen misslyckades!\r\n Response:\n " + JSON.stringify(err));       
      });   

      this.setState({isLoading: false}) 
    }
  
  render() {
    return(
        <Form id="contact-form" onSubmit={this.sendEmail}>
            <Form.Group>
          </Form.Group> 
          <Row>
            <Col md={4} sm={12}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Din mailadress</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name="user_email" required/>
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Ditt namn</Form.Label>
                <Form.Control placeholder="Anna Nyhm" name="user_name" required/> 
              </Form.Group>
            </Col>
            <Col md={4} sm={12}>
              <Form.Group controlId="formBasicSubject">
                <Form.Label>Ämne</Form.Label>
                <Form.Control placeholder="Meddelandets ämne" name="subject" required/> 
              </Form.Group>             
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Meddelande</Form.Label>
                <Form.Control className="message" as="textarea" placeholder="Skriv ditt meddelande här!" name="message" required/>
              </Form.Group>
            </Col>
          </Row>  
        {/*  <Button 
            className="mt-3" 
            variant="outline-primary" 
            type="submit" 
            disabled={this.buttonIsLoading} >
            {this.buttonIsLoading ? 'Skickar...' : 'Skicka'}
          </Button>  */}
          <SubmitButton isLoading={this.isLoading} />
        </Form>       
    )
  }
  
}

export default ContactForm; 


