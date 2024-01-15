import React from "react";
import { Tilt } from "react-tilt";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { Zoom } from "react-awesome-reveal";

const Tech = () => {
  return (
    <>
      <Zoom down cascade>
        <p className={`${styles.sectionSubText} text-center`}>
          TECHNOLOGIES USED
        </p>
      </Zoom>
      <Zoom down cascade>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills</h2>
      </Zoom>
      <div className="flex flex-row flex-wrap mt-10 justify-center gap-[90px]">
        {technologies.map((tech, index) => (
          <Zoom down cascade>
            <Tilt options={{ max: 80 }} key={index}>
              <img className="w-36 h-36" src={tech.icon} />
            </Tilt>
          </Zoom>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
