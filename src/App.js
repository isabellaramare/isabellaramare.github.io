import React from 'react';
import Container from 'react-bootstrap/Container'
import './App.css';
import MyNavbar from './components/mynavbar';
import Mainrouting from './components/mainrouting';

function App() {
  return (    
    <Container fluid> 
      <MyNavbar />  
      <Mainrouting />    
    </Container>   
  );
}

export default App;
