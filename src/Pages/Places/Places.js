import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Place from "./../Place/Place";
import "./Places.css";

const Places = () => {
  const [tour, setTour] = useState([]);
  useEffect(() => {
    fetch("./tour.json")
      .then((res) => res.json())
      .then((data) => setTour(data));
  }, []);
  return (
    <Container>
      <h2>TOP PLACES OF US</h2>
      <p>
        We are offering low cost tour tickets. Because of you enjoy the tour
      </p>
      <div className="col-12 col-lg-4 col-md-4 places">
        {tour.map((place) => (
          <Place key={place.id} place={place}></Place>
        ))}
      </div>
    </Container>
  );
};

export default Places;