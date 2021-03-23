import React from "react"
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
              <Link to="/" style={{textDecoration: 'none'}}>Főoldal</Link>
            </li>
            <li style={NavElementStyle}>
              <Link to="/about" style={{textDecoration: 'none'}}>Rólam</Link>
            </li>
            <li style={NavElementStyle}>
              <Link to="/references" style={{textDecoration: 'none'}}>Referenciamunkáim</Link>
            </li>
            <li style={NavElementStyle}>
              <Link to="/contact" style={{textDecoration: 'none'}}>Kapcsolat</Link>
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
