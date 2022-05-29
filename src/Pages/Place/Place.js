import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Place.css";

const place = ({ place }) => {
  const { img, name, description, price } = place;
  return (
    <Container className="place">
      <div className="card-body">
        <img className="image" src={img} alt="" />
        <h2 className="text-center name">{name}</h2>
        <p className="text-center description">{description.slice(0, 100)}</p>
        <h3 className="text-danger text-center">Price: {price}</h3>
        <div className="button">
          <Button variant="warning">See Details</Button>
        </div>
      </div>
    </Container>
  );
};

export default place;
