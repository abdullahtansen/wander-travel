import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Place.css";

const place = ({ place }) => {
  const { _id, name, description, price, img } = place;
  return (
    <Container className="place">
      <div className="card-body">
        <img className="image" src={img} alt="" />
        <h2 className="text-center name">{name}</h2>
        <p className="text-center description">{description}</p>
        <h3 className="text-danger text-center">Price: ${price}</h3>
        <div className="button">
          <Link to={`/managePlaces/${_id}`}>
            <Button variant="warning">Book Now</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default place;
