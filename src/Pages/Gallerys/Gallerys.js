import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Gallery from "../Gallery/Gallery";
import "./Gallerys.css";

const Gallerys = () => {
  const [gallerys, setGallery] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/gallery")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <Container className="our_gallery">
      <h2>Our Gallery</h2>
      <p>This is our Gallery. Hare you can see some amazing photos.</p>
      <div className="picture">
        {gallerys.map((gallery) => (
          <Gallery key={gallery.img} gallery={gallery}></Gallery>
        ))}
      </div>
    </Container>
  );
};

export default Gallerys;
