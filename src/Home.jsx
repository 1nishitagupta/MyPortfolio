import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Services from "./Services";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      {/* <Skills /> */}
      <Qualification />
      {/* <Services/> */}
    </>
  );
}

export default Home;
