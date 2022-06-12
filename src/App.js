import React from 'react';
import './App.css';
import * as ReactBootStrap from 'react-bootstrap';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import FindPath from './components/FindPath';
import AboutUs from './components/AboutUs';
import Posts from './components/Posts';
import Doctors from './components/Doctors';
import AddAppointment from './components/AddAppointment';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RouteGuard from './components/RouteGuard';
import { useAuthInit } from './hooks/useAuthInit';

function App() {
  useAuthInit();

  return (
    <div className="App">
      <Router>
        <NavBar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />

          <RouteGuard path="/admin" component={Login} />

          <Route path="/login" component={Login} />

          <Route path="/register" component={Register} />

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

          <Route path="/addAppointment" component={AddAppointment}>
            <AddAppointment />
          </Route>

          {/* <Route component={PageNotFound}>
            <PageNotFound />
          </Route> */}
        </Switch>
      </Router>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
}

export default App;
