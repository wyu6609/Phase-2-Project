import React from "react";
import Hero from "./Hero";
import "./HomeStyles.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
