import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Aboutme from './aboutme'
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';

const Mainrouting = () => (
    <Switch>
        <Route exact path="/home" component={ Home } />
        <Route path="/resume" component={ Resume } />
        <Route path="/aboutme" component={ Aboutme } />
        <Route path="/projects" component={ Projects } />
        <Route path="/contact" component={ Contact } />
        <Route component={() => (<div>404 Not found </div>)} />
    </Switch>
);

export default Mainrouting;