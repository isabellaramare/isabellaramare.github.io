import React from 'react';
import { Nav } from 'react-bootstrap';

class MyNavbarLink extends React.Component {
  handleClick = () => this.props.onClick(this.props.index)
  
  render() {
    return <Nav.Link      
      className={
        this.props.isActive ? 'active' : 'album'
      }
      href={ this.props.href }
      onClick={ this.handleClick }
    >
      <span>{ this.props.name }</span>
    </Nav.Link>
  }
}

export default MyNavbarLink;