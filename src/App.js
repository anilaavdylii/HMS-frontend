import React from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import FindPath from './Components/FindPath';
import AboutUs from './Components/AboutUs';
import Posts from './Components/Posts';
import Doctors from './Components/Doctors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

          <Route path="/findPath" component={FindPath}>
            <FindPath />
          </Route>

          <Route path="/aboutUs" component={AboutUs}>
            <AboutUs />
          </Route>

          <Route path="/posts" component={Posts}>
            <Posts />
          </Route>
         
          <Route path="/doctors" component={Doctors}>
            <Doctors />
          </Route>
        </Switch>
    </Router>
    <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default App;
