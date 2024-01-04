import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiences } from "../constants";
import { Fade } from "react-awesome-reveal";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full justify-center items-center w-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-auto h-auto object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-bold text-[24px]">{experience.title}</h3>
        <p className="text-[16px] text-secondary font-semibold">
          {experience.company_name}
        </p>
      </div>
      <div>
        <ul className="mt-5 ml-5 list-disc space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={index}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Fade down cascade>
        <p className={`${styles.sectionSubText} text-center`}>
          WHAT I HAVE DONE SO FAR
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience
        </h2>
      </Fade>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard experience={experience} key={index} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
