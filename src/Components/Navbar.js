import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect bg="light" expand="lg">
  <ReactBootStrap.Navbar.Brand href="#home">Qendra Klinike Universitare e Kosoves</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">       
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>

      <Link to="/home">
    <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
    </Link>

    <Link to="/login">
    <ReactBootStrap.Nav.Link href="#login">Kycu</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/register">
    <ReactBootStrap.Nav.Link eventKey={2} href="#register">
        Krijo Llogari
      </ReactBootStrap.Nav.Link>
    </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;