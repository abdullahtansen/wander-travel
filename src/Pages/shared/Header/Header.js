import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/UseAuth";
import logo from "../../../img/logo/logo.png";
import "./Header.css";
import ProfilePopper from "./../ProfilePopper/ProfilePopper";

const Header = () => {
  const { user } = useAuth();
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
              <Link to="/">Home</Link>
              <Link to="/myOrders">My Orders</Link>
            </Nav>
            {!user.email ? (
              <>
                <Link className="Link" to="/login">
                  <Button style={{ marginRight: "15px", marginTop: "5px" }}>
                    Login
                  </Button>
                </Link>
                <Link className="Link" to="/register">
                  <Button style={{ marginRight: "15px", marginTop: "5px" }}>
                    Register
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <ProfilePopper></ProfilePopper>{" "}
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
