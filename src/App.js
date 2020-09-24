import React, { Fragment } from 'react';
import MyNavbar from './components/mynavbar'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
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
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home" component={ Home } />
          <Route path="/resume" component={ Resume } />
          <Route path="/aboutme" component={ Aboutme } />
          <Route path="/contact" component={ Contact } />

          <Route path="/projects/artwork" component={ Projects } />
          <Route path="/projects/code" component={ Contact } />
        </Fragment>
     </Router>   
  );
}

export default App;
