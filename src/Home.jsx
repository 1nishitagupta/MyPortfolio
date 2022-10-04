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
import Fade from 'react-reveal/Fade';

function Home() {

  const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
    
    setIsActive(current => !current);

    }


  return (
    <>
  
      <Navbar isActive={isActive} setIsActive={setIsActive} handleClick={handleClick}  />
   
      <Hamburger isActive={isActive} setIsActive={setIsActive}/>
      <Banner aref="home" />
      <About aref="about"/>
      <Qualification aref="qualifications"/>
      <Skills aref="skills"/>
      <Services aref="services"/>
      <Portfolio aref="portfolio"/>
      <Contact aref="contact"/>
      <Footer/>
    </>
  );
}

export default Home;
