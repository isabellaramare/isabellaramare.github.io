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

  window.addEventListener(
    "scroll",
    () => {
      document.body.style.setProperty(
        "--scroll",
        window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
      );
    },
    false
  );

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
          <Route path="/projects" component={Projects} />
        </Fragment>
     </Router>   
  );
}

export default App;
