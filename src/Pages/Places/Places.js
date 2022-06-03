import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Place from "./../Place/Place";
import "./Places.css";

const Places = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/places")
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  return (
    <Container>
      <h2>TOP PLACES OF US</h2>
      <p>
        We are offering low cost tour tickets. Because of you enjoy the tour
      </p>
      <div md={4} lg={4} sm={12} className="places">
        {tour.map((place) => (
          <Place key={place._id} place={place}></Place>
        ))}
      </div>
    </Container>
  );
};

export default Places;
