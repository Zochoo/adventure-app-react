import React from "react";
import '../../App.css';
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
