import React from "react";
import "./Banner.css";
import { Button } from "react-bootstrap";
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-section">
        <h1>TRAVELLING AROUND THE WORLD</h1>
        <p>
          We are Dreamy Travel. We are offering some amazing offer for you.{" "}
          <br /> you are looking for a trusted place form buy tickets,
          <br /> then we provides you best offers.
        </p>
        <Button>Discover The World</Button>
      </div>
    </div>
  );
};

export default Banner;
