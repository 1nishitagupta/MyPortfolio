import * as React from "react";
import { Outlet } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Tech,
  Projects,
} from "./components";

const Home = () => {
  return (
    <div>
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat relative ">
        <div class="absolute inset-0 bg-black bg-opacity-80"></div>
        {/* <div class="absolute inset-0 bg-black bg-opacity-80"></div>      */}
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Feedbacks />
      <div className=" bg-primary">
        {/* <div class="absolute inset-0 bg-black bg-opacity-80"></div> */}
        <Contact />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
