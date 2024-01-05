import * as React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

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
import Home from "./Home";

const App = () => {
  return (
    <div className="relative z-0 bg-primary ">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
