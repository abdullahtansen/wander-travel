import React from "react";
import "./Home.css";
import Banner from "./../Banner/Banner";
import Places from "../Places/Places";
import Gallerys from "../Gallerys/Gallerys";
import Counter from "../Counter/Counter";
import Offer from "../Offer/Offer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Places></Places>
      <Gallerys></Gallerys>
      <Offer></Offer>
      <Counter></Counter>
    </div>
  );
};

export default Home;
