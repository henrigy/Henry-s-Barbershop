import React, { useState } from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import LandingSection from "../components/Landing";
import Navbar from "../components/Navbar";
import Reviews from "../components/Reviews";
import Schedule from "../components/Schedule";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingSection />
      <Schedule />
      <Gallery />
      <Reviews />
      <Footer />
    </>
  );
};

export default Home;
