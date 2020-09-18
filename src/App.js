import React from 'react';
import Container from 'react-bootstrap/Container'
import Home from './components/home';
import './App.css';

function App() {
  return (    
    <Container fluid> 
      <Home />
      {/*<Mynavbar />      
      <Mainrouting />        
      <Footer /> */}
    </Container>   
  );
}

export default App;
