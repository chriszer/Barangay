import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../logo.png";

const Styles = styled.div`
  .navbar {
    background-color: #222;
    border-bottom: #008ed6 3px solid;
    //opacity: 0.8;
  }

  .navbar .nav-link {
    font-size: 17px;
    //text-transform: uppercase;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  //Navigation bar attributes and style with linking into different pages.
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/home">
        <img
          src={logo}
          style={{ marginLeft: "35px", width: "180px", height: "75px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/Dashboard">Reports</Link>
            </Nav.Link>
          </Nav.Item>
         
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact Us</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Logout</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);