import React from "react";
import { SectionWrapper } from "../hoc";
import { Fade, Zoom } from "react-awesome-reveal";
import { styles } from "../styles";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name,
  image,
  testimonial,
  designation,
  company,
  linkedin,
}) => {
  return (
    <div className="rounded-3xl bg-black-200 p-10 ">
      <div className="flex items-center mb-6">
        <a href={linkedin} target="_blank">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
        </a>
        <p className="font-bold text-[48px]">"</p>
      </div>
      <p>{testimonial}</p>
      <div className="flex gap-2 justify-between items-center mt-10">
        <div className="flex flex-col">
          <p className="font-medium">
            <span>@</span>
            <a href={linkedin} target="_blank">
              {name}
              <p className="text-[14px] text-secondary">
                {designation} at {company}
              </p>
            </a>
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-2xl">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <Fade down cascade>
          <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
        </Fade>
        <Fade down cascade>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </Fade>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-5 pb-14`}>
        {testimonials.map((testimonial, index) => (
          <Zoom triggerOnce key={index}>
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          </Zoom>
        ))}
        {/* Coming Soon............... */}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
