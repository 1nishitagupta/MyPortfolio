import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Projects,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat relative">
          <div class="absolute inset-0 bg-black bg-opacity-80"></div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <Feedbacks />
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
