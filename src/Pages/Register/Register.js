import React, { useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import login from "../../img/login.38acde2b.png";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";
import "./Register.css";
import useAuth from "./../../hooks/UseAuth";

const Register = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const { emailSignIn, signInUsingGoogle, signInUsingGithub } = useAuth();

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    if (password !== confirmPassword) {
      return alert("Password not Matched");
    } else {
      emailSignIn(email, password);
    }
  };

  const handleGoogle = () => {
    signInUsingGoogle().then(() => {});
  };

  const handleGithub = () => {
    signInUsingGithub().then(() => {});
  };

  return (
    <div class="full-section">
      <section className="container">
        <Row className="d-flex full-form">
          <Col md={6} sm={12}>
            <img className="img-fluid" src={login} alt="" />
          </Col>
          <Col md={6} sm={12} className="logged-in">
            <Form className="login-form" onSubmit={handelSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="email">Your Email</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter Your Email"
                  className="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="email">Your Password</Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter Your Password"
                  className="Password"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label className="email">Confirm Password</Form.Label>
                <Form.Control
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="Re-Type Your Password"
                  className="Password"
                />
              </Form.Group>
              <Button
                style={{ marginRight: "120px" }}
                variant="primary"
                type="submit"
              >
                Register
              </Button>
            </Form>
            <div>
              <p className="any-account">
                Don't have any Account?
                <a href="https://facebook.com">signup</a>
              </p>
              <h5 className="other__methods">OR</h5>
            </div>
            <div className="login-btn">
              <div>
                <Button className="google-btn" onClick={handleGoogle}>
                  <FaGoogle
                    style={{
                      marginRight: "10px",
                      marginBottom: "3px",
                      color: "black",
                      fontSize: "25px",
                    }}
                  ></FaGoogle>
                  Google Sign In
                </Button>
                <Button onClick={handleGithub} className="git-btn">
                  <FaGithubSquare
                    style={{
                      marginRight: "10px",
                      marginBottom: "3px",
                      color: "black",
                      fontSize: "25px",
                    }}
                  ></FaGithubSquare>
                  Github Sign In
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Register;
