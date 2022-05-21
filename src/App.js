import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";

import NavBar from "./Components/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
        <NavBar />
 

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/home" component={Home}>
              <Home />
          </Route>

          <Route path="/login" component={Login}>
              <Login />
          </Route>

          <Route path="/register" component={Register}>
            <Register />
          </Route>
         
        </Switch>
    </Router>
    </div>
  );
}

export default App;
