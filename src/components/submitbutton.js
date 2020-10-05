import React from 'react';
import { Button } from 'react-bootstrap'
import '../App.css';

class SubmitButton extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
        isLoading: this.props.isLoading
    };
  }

  render() {
    return (
      <Button 
        className="mt-3" 
        variant="outline-pink" 
        type="submit" 
        disabled={this.state.isLoading} 
      >
        {this.isLoading ? 'Skickar...' : 'Skicka'}
      </Button> 
    );
  };
}

export default SubmitButton;