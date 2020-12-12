import React from 'react';
import Home from './HomeEnglish';
import Contact from './ContactEnglish';
import About from './AboutEnglish';
import References from './ReferencesEnglish';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function EnglishPage() {
    console.log("english");
    return (
        <div>
     <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/english">Home</Link>
            </li>
            <li>
              <Link to="/english/about">About</Link>
            </li>
            <li>
              <Link to="/english/references">References</Link>
            </li>
            <li>
              <Link to="/english/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/english/about">
            <About />
          </Route>
          <Route path="/english/contact">
            <Contact />
          </Route>
          
          <Route path="/english/references">
            <References />
          </Route>
          <Route path="/english">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
        </div>
    )
}
