import React from 'react';
import Home from './HomeHungarian';
import Contact from './ContactHungarian';
import About from './AboutHungarian';
import References from './ReferencesHungarian';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function HungarianPage() {
    return (
        <div>
            <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Főoldal</Link>
            </li>
            <li>
              <Link to="/about">Rólam</Link>
            </li>
            <li>
              <Link to="/references">Referenciamunkáim</Link>
            </li>
            <li>
              <Link to="/contact">Kapcsolat</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/references">
            <References />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        </div>
    )
}
