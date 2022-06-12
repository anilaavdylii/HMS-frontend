import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHospital } from 'react-icons/fa';

const NavBar = () => {
  return (
    <div className="App">
      <ReactBootStrap.Navbar collapseOnSelect bg="light" expand="lg">
        <ReactBootStrap.Navbar.Brand href="/">
          Qendra Klinike Universitare e Kosoves <FaHospital />
        </ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>
          <ReactBootStrap.Nav>
            <Link to="/">
              <ReactBootStrap.Nav.Link href="#home">
                Faqja Kryesore
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/posts">
              <ReactBootStrap.Nav.Link href="#posts">
                Lexo rreth Semundjeve
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/aboutUs">
              <ReactBootStrap.Nav.Link href="#aboutUs">
                Rreth Nesh
              </ReactBootStrap.Nav.Link>
            </Link>

            <Link to="/login">
              <ReactBootStrap.Nav.Link href="#login">
                Kycu
              </ReactBootStrap.Nav.Link>
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
  );
};

export default NavBar;
