import React, { Component } from 'react';
import { Image, Tooltip, OverlayTrigger } from 'react-bootstrap';
import isabellaportait from '../images/isabella portrait.png'
import '../App.css';

class Portrait extends Component {  
  render() {
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
          <h1>
            Hej!
          </h1>
      </Tooltip>        
    );
    return(
      <div>
      <OverlayTrigger
        placement="top"
        delay={{ show: 200, hide: 400 }}
        overlay={renderTooltip}
      >
        <Image 
          style={{cursor: "pointer"}}                 
          width="70%"
          rounded
          className="logo rounded-circle"
          src={isabellaportait}
          alt="Isabella Portrait"           
          />          
      </OverlayTrigger>         
      </div>      
    );
  } 
}

export default Portrait; 