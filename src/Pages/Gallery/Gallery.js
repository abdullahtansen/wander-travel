import React from "react";
import "./Gallery.css";

const Gallery = ({ gallery }) => {
  const { img } = gallery;
  return (
    <div>
      <img className="photo" src={img} alt="" />
    </div>
  );
};

export default Gallery;
