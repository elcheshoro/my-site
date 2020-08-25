import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../home/home';
import About from '../about/about';
import Services from '../services/services';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
