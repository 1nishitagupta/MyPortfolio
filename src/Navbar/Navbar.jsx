import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade';
import "./navbar.css"

function Navbar({isActive , setIsActive ,handleClick}) {
  const [scroll, setScrollY] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => setScrollY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setScrollY(window.scrollY));
    };
  }, []);

  
    


  return (
    <nav className={`${scrollY > 100 ? "navscroll" : "nav"} `}>
      <div className="container">
        <div className="navbar">
        <Fade left>
          <div className="logo">
            <img
              className={`${scrollY > 100 ? "logoblack" : "logowhite"} `}
              src="images/logo.png"
              alt="logo"
            />
          </div>
          </Fade>
          <Fade right>
          <div className="menu">
            
            <div className="dropdown">
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
              </ul>
            </div>

            <div className="contact">
              <button><a href="#contact">Contact Me</a></button>
            </div>
          </div>
          </Fade>
          <div className="ham">
          <div className={isActive ? 'change' : 'hamburger'} onClick={handleClick}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
