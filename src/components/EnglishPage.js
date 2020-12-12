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
  const NavElementStyle = {
    fontSize: 20,
    display: "inline-block",
    margin: "5px",
    padding: "3px",
    textDecoration: 'none',
    backgroundColor: "#78c3ff",
    width: "200px",
    textAlign: "center"
  }

    return (
        <div>
     <Router>
      <div>
        <nav>
          <ul>
            <li style={NavElementStyle}>
              <Link to="/english" style={{textDecoration: 'none'}}>Home</Link>
            </li>
            <li style={NavElementStyle}>
              <Link to="/english/about" style={{textDecoration: 'none'}}>About</Link>
            </li>
            <li style={NavElementStyle}>
              <Link to="/english/references" style={{textDecoration: 'none'}}>References</Link>
            </li>
            <li style={NavElementStyle}>
              <Link to="/english/contact" style={{textDecoration: 'none'}}>Contact</Link>
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
