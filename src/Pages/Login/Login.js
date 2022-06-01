import { Button, Col, Form, Row } from "react-bootstrap";
import login from "../../img/login.38acde2b.png";
// import { FaGoogle, FaGithubSquare } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
import useAuth from "../../hooks/UseAuth";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { user, emailSignIn, signInUsingGoogle, signInUsingGithub } = useAuth();
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (password.length < 6) {
      return setError("Password Must be at least 6 characters long.");
    } else {
      emailSignIn(email, password);
    }
    if (
      !/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(
        password
      )
    ) {
      setError("Password Must contain to Uppercase");
    }
    user || emailSignIn(email, password);
  };
  //   private route setup
  const location = useLocation();
  let navigate = useNavigate();

  let from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    signInUsingGoogle().then(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    });
  };

  const handleGithub = () => {
    signInUsingGithub().then(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    });
  };

  return (
    <div className="full-section">
      <section className="container">
        <Row className="d-flex full-form">
          <Col md={6} sm={12}>
            <img className="img-fluid" src={login} alt="" />
          </Col>
          <Col md={6} sm={12} className="logged-in">
            <Form className="login-form" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  ref={emailRef}
                  type="email"
                  placeholder="Enter email"
                  className="Email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                  className="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <div>
              <p className="any-account">
                Don't have any Account? <Link to="/register">sign up</Link>
              </p>
              <h5 className="other__methods">OR</h5>
            </div>
            <div className="login-btn">
              <div className="row mb-3 text-danger">{error}</div>
              <div>
                <Button onClick={handleGoogle} className="google-btn">
                  {/* <FaGoogle
                    style={{
                      marginRight: "10px",
                      marginBottom: "3px",
                      color: "black",
                      fontSize: "25px",
                    }}
                  ></FaGoogle> */}
                  Google Sign In
                </Button>
                <Button onClick={handleGithub} className="git-btn">
                  {/* <FaGithubSquare
                    style={{
                      marginRight: "10px",
                      marginBottom: "3px",
                      color: "black",
                      fontSize: "25px",
                    }}
                  ></FaGithubSquare> */}
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

export default Login;
