import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { instagram, githubSvg, twitter, linkedin, resume } from "../assets";
import { Zoom as ZoomAwesome } from "react-awesome-reveal";
import { Zoom } from "react-reveal";
import { Tilt } from "react-tilt";

const Hero = () => {
  return (
    <section className="flex sm:flex-row flex-col w-full justify-between gap-[40px] sm:py-[15%] py-[40%] h-[90vh] mx-auto ">
      <div className={`flex flex-col mt-[40px]`}>
        <div className="flex flex-row gap-8">
          <div className="flex flex-col items-center justify-center">
            <div className="h-5 w-5 rounded-full bg-[#915eff]" />
            <div className="sm:h-60 h-40 w-1 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi I'm <span className="text-[#915eff]">Nishita</span>
            </h1>
            <p className={`${styles.heroSubText}`}>
              I develop Progressive web applications
            </p>
    
            <Zoom>
              <a href={resume} download>
                <button className="px-8 py-3 m-[30px] transition duration-200 ease-in-out bg-violet-800 hover:bg-violet-500 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 shadow-lg w-fit rounded-2xl">
                  {"Download Resume"}
                </button>
              </a>
            </Zoom>
          </div>
        </div>
      </div>
      <ZoomAwesome down cascade>
        <div className="flex sm:flex-col flex-row items center mr-[20px]">
          <Tilt
            options={{ max: 80 }}
            key={"instagram"}
            className="m-[20px] cursor-pointer"
          >
            <a href="https://www.instagram.com/nishitaa_2002/" target="_blank">
              <img src={instagram} />
            </a>
          </Tilt>
          <Tilt
            options={{ max: 80 }}
            key={"github"}
            className="m-[20px] cursor-pointer"
          >
            <a href="https://github.com/1nishitagupta" target="_blank">
              <img src={githubSvg} />
            </a>
          </Tilt>

          <Tilt
            options={{ max: 80 }}
            key={"linkedin"}
            className="m-[20px] cursor-pointer"
          >
            <a
              href="https://www.linkedin.com/in/nishita-gupta-/"
              target="_blank"
            >
              <img src={linkedin} />
            </a>
          </Tilt>
        </div>
      </ZoomAwesome>
    </section>
  );
};

export default SectionWrapper(Hero);
