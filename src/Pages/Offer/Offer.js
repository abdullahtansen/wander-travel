import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Offer.css";

const Offer = () => {
  return (
    <section className="offer">
      <div className="offer-section">
        <h2>HOLIDAY PACKAGE OFFER</h2>
        <h1>
          HOLIDAY SPECIAL <span>25%</span> OFF !!
        </h1>
        <p>
          Sign up now to receive hot special offers <br />
          and information about the best tour packages, updates and discounts !!
        </p>
        <div>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <div className="form_design">
                <Form.Control type="email" placeholder="Enter Your Email" />
              </div>
            </Form.Group>
          </Form>
          <Link to="/home">
            <Button>Sign In Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offer;
