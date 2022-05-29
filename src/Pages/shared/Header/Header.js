import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../img/logo/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img className="logo" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/myOrders">My Orders</NavLink>
              <NavLink to="/aboutUs">About Us</NavLink>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </Nav>
            <Nav className="mb-2">
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
              <NavLink to="/register">
                <Button>Register</Button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
