import React from 'react'
import { SectionWrapper } from '../hoc'
import { Fade,Zoom } from 'react-awesome-reveal';
import { styles } from '../styles';
import { testimonials } from '../constants';

const FeedbackCard = ({index, name, image, testimonial, designation, company}) =>{
  return (
    <div className='rounded-3xl bg-black-200 p-10 w-full '>
      <p className='font-bold text-[48px]'>"</p>
      <p>{testimonial}</p>
      <div className='flex gap-2 justify-between items-center mt-10'>
        <div className='flex flex-col'>
          <p className='font-medium'><span>@</span> {name}</p>
          <p className='text-[14px] text-secondary'>
            {designation} at {company}</p>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-2xl' >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <Fade down cascade>
          <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
        </Fade>
        <Fade down cascade>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </Fade>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-col flex-wrap gap-5 pb-14`}>
        {testimonials.map((testimonial, index)=>(
          <Zoom triggerOnce>
            <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
          </Zoom>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks,"")