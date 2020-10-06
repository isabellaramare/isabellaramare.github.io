import React, { Component } from 'react';
import { Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import '../App.css';

class Portrait extends Component {  
  constructor(props) {
    super(props);
    this.state = {
        imgSrc: this.props.imgSrc,
        tooltip: this.props.tooltip,
        style: this.props.styling,
        tooltipPosition: this.props.tooltipPosition 
    };
  }

  render() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
          <h1>
            {this.state.tooltip}
          </h1>
      </Tooltip>        
    );
    return(
      <div>
      <OverlayTrigger
        placement={this.state.tooltipPosition}
        delay={{ show: 200, hide: 400 }}
        overlay={renderTooltip}
      >
        <Image 
          style={{cursor: "pointer"}}                 
          className={this.state.style}
          src={this.state.imgSrc}
          alt="Isabella Portrait"           
          />          
      </OverlayTrigger>         
      </div>      
    );
  } 
}

export default Portrait; 