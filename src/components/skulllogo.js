import React from 'react';
import '../App.css';
import skull from '../images/skull.svg';
import skullInvert from '../images/skull-invert.svg';

class SkullLogo extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
       imgSrc: skull
    };
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver() {
    this.setState({
      imgSrc: skullInvert
    });
  }

  handleMouseOut() {
    this.setState({
      imgSrc: skull
    });
  }

  render() {
    return (
      <img 
      src={this.state.imgSrc} 
      className="logo" 
      alt="skull logo" 
      onMouseOver={this.handleMouseOver}
      onMouseOut={this.handleMouseOut}/>
    );
  }
}

export default SkullLogo;