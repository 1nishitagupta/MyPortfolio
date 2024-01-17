import React from "react";
import { SectionWrapper } from "../hoc";
import { Fade, Zoom } from "react-awesome-reveal";
import { styles } from "../styles";
import { projects, projectsDescription } from "../constants";
import { Tilt } from "react-tilt";
import { github } from "../assets";

const ProjectCard = ({
  image,
  name,
  description,
  source_code_link,
  tags,
  hosted_link,
}) => {
  return (
    <Fade>
      <Tilt
        options={{ max: 20 }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px]"
      >
        <a href={hosted_link} className="cursor-pointer" target="_blank">
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="object-contain h-full w-full rounded-2xl"
            />
            <div className="absolute flex m-3 justify-end inset-0 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-10 h-10 flex justify-center items-center cursor-pointer rounded-full"
              >
                <img src={github} />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="font-bold text-[24px]">{name}</h3>
            <p className="text-secondary text-[16px]">{description}</p>
          </div>
          <div className="mt-5 flex flex-row gap-3 flex-wrap">
            {tags.map((tag) => (
              <p key={tag.name} className={`${tag.color} text-[14px]`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </a>
      </Tilt>
    </Fade>
  );
};

const Projects = () => {
  return (
    <div>
      <Fade down cascade>
        <p className={styles.sectionSubText}>MY WORK</p>
      </Fade>
      <Fade down cascade>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </Fade>
      <p className="text-secondary max-w-3xl text-[16px] mt-3 leading-[30px]">
        {projectsDescription}
      </p>

      <div className="flex flex-wrap justify-center gap-[24px] mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
