import React from 'react'
import { Tilt } from 'react-tilt'
import { services, overview } from '../constants'
import {styles} from '../styles'

import {motion} from 'framer-motion'

import {fadeIn} from '../utils/motion' 
import { SectionWrapper } from '../hoc'
import { Fade } from 'react-awesome-reveal';

const ServiceCard = ({title, index, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
          variants={fadeIn("right","spring",0.5 * index, 0.75)}
          className="w-full green-pink-gradient rounded-[20px] shadow-card p-[1px]"
        >
          <div
            options={{
              max:45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] justify-evenly flex items-center flex-col"
          >
            <img src={icon} alt={title} className="object-contain h-16 w-16" />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>

        </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
  <section className='max-w-7xl mx-auto '>
    <Fade down cascade>
      <p className={styles.sectionSubText}>Introduction</p>
    </Fade>
    <Fade down cascade>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </Fade>
    <Fade down cascade>
      <p variants={fadeIn('','',0.1,1)} className='mt-2 text-secondary max-w-3xl text-[18px]'>{overview}</p>
    </Fade>
    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service,i)=>(
            <ServiceCard key={service.title}  icon={service.icon} index={i} title={service.title} />
        ))}
    </div>
  </section>
  )
}

export default SectionWrapper(About,"about")