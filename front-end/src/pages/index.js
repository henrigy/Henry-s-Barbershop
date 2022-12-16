import React, { useState } from "react";
import InfoSection from "../components/InfoSection";
import LandingSection from "../components/Landing";
import Navbar from "../components/Navbar";
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
      <InfoSection />
    </>
  );
};

export default Home;
