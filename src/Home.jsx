import React , {useState} from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Qualification from "./Qualification/Qualification";
// import Services from "./Services";
import Hamburger from "./Navbar/Hamburger";


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
      <Qualification aref="education"/>
      <Skills aref="skills"/>
      {/* <Services/> */}
    </>
  );
}

export default Home;
