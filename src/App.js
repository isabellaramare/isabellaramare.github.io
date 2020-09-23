import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import MyNavbar from './components/mynavbar'
import { HashRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router' 
import Home from './components/home';
import Aboutme from './components/aboutme'
import Contact from './components/contact';
import Resume from './components/resume';
import Projects from './components/projects';

const HeaderWithRouter = withRouter(MyNavbar);

function App() {
  return (    
     <Router basename="/">
       <Fragment>
          <HeaderWithRouter />
          <Route exact path="/home" component={ Home } />
          <Route path="/resume" component={ Resume } />
          <Route path="/aboutme" component={ Aboutme } />
          <Route path="/projects" component={ Projects } />
          <Route path="/contact" component={ Contact } />
        </Fragment>
     </Router>   
  );
}

export default App;
