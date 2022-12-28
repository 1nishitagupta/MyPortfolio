import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import About from "./Components/About";
import SwipeableTextMobileStepper from "./Components/Awards/Awards";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Qualification from "./Components/Qualification";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import FeedBack from "./Components/Feedback";
import Hamburger from "./Components/Navbar/Hamburger";
import Blog from "./Routes/Blog";
import { Routes, Route } from "react-router-dom";
import Feedback from "./Routes/Feedback";
import { Cases } from "@mui/icons-material";


function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  function HomePage() {
    return (
      <>
        <Banner aref="home" />
        <About aref="about" />
        <SwipeableTextMobileStepper/>
        <Qualification aref="qualifications" />
        <Skills aref="skills" />
        <Services aref="services" />
        <Portfolio aref="portfolio" />
        <Contact aref="contact" />
        <FeedBack/>
        <Footer aref="footer" />
      </>
    );
  }

  return (
    <>
      <Navbar
        isActive={isActive}
        setIsActive={setIsActive}
        handleClick={handleClick}
      />
      <Routes>
        <Route path="blog" element={<Blog />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Hamburger
        isActive={isActive}
        setIsActive={setIsActive}
        handleClick={handleClick}
      />
    </>
  );
}

export default Home;



