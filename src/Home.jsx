import React , {useState} from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import About from "./About";
import Skills from "./Skills";
import Qualification from "./Qualification";
import Services from "./Services";
import Hamburger from "./Hamburger";






function Home() {

  const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
    
    setIsActive(current => !current);

    }


  return (
    <>
      <Navbar isActive={isActive} setIsActive={setIsActive} handleClick={handleClick} />
      <Hamburger isActive={isActive} setIsActive={setIsActive}/>
      <Banner />
      <About />
      <Qualification />
       <Skills />
      {/* <Services/> */}
    </>
  );
}

export default Home;
