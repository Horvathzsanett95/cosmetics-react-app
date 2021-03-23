import React from "react";
import logoHungarian from './assets/HungarianFlag.svg';
import logoEnglish from './assets/EnglishFlag.svg';
import EnglishPage from './components/EnglishPage';
import HungarianPage from './components/HungarianPage';
import './App.css';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  const navItemStyle = {
    position: "absolute",
    margin: "5px",
    padding: "3px",
    fontSize: 20,
    display: "inline-block",
    textDecoration: 'none',
    width: "30px",

  }
 
  return (
    <body>
    <div className="App">
      <Router>
      <div>
        <nav>
          <ul>
            <div className="Country-Picture-Hungary">
            <li style={navItemStyle}>
              <Link to="/"><img src={logoHungarian} alt="Hungarian flag logo"></img></Link>
            </li>
            </div>
            <div className="Country-Picture-England">
            <li style={navItemStyle}>
              <Link to="/english"><img src={logoEnglish} alt="English flag logo"></img></Link>
            </li>
            </div>
          </ul>
        </nav>

        <Switch>

          <Route path="/english">
            <EnglishPage />
          </Route>
          <Route path="/">
            <HungarianPage />
          </Route>

        </Switch>
      </div>
    </Router>
    </div>
    </body>
  );
}

export default App;
