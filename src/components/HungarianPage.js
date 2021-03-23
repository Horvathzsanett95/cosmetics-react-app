import React from "react"
import Home from './HomeHungarian';
import Contact from './ContactHungarian';
import About from './AboutHungarian';
import References from './ReferencesHungarian';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HungarianPage.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


export default function HungarianPage() {
  const menuItemStyle = {
    display: "inline-block",
    textDecoration: 'none',
    textAlign: "center"
  }

    return (
       <div>
       <Router>
      <div>
        <nav>
          <ul>
            
            <Link to="/" style={menuItemStyle}><div class="vertical"><span class="text">Főoldal</span></div></Link>
            <Link to="/about" style={menuItemStyle}><div class="vertical"><span class="text">Rólam</span></div></Link>
            <Link to="/references" style={menuItemStyle}><div class="vertical"><span class="text">Munkáim</span></div></Link>
            <Link to="/contact" style={menuItemStyle}><div class="vertical"><span class="text">Kapcsolat</span></div></Link>

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
    </div>      )
}
