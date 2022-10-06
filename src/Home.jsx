import React , {useState} from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Portfolio from "./Portfolio/Portfolio";
import Qualification from "./Qualification/Qualification";
import Services from "./Services/Services";
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer";
import Hamburger from "./Navbar/Hamburger";
import Blog from "./Blog";
import { Routes, Route } from "react-router-dom";

import Fade from 'react-reveal/Fade';

function Home() {

  const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
    
    setIsActive(current => !current);

    }


    function HomePage(){
      return(
        <>
        <Banner aref="home" />
      
      
      <About aref="about"/>
      <Qualification aref="qualifications"/>
      <Skills aref="skills"/>
      <Services aref="services"/>
      <Portfolio aref="portfolio"/>
      <Contact aref="contact"/>
      

      <Footer/>
        </>
      )
    }


  return (
    <>

      
  
      <Navbar isActive={isActive} setIsActive={setIsActive} handleClick={handleClick}  />
      
      <Routes>
        <Route path="blog" element={ <Blog/> } />
        <Route path="/" element={<HomePage /> }/>
      </Routes>
      <Hamburger isActive={isActive} setIsActive={setIsActive}/>
      
      
    </>
  );
}

export default Home;
