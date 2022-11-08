import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = () => {

const transition ={type: 'spring' , duration:3}

  return (
    <div className='flex justify-between hero'>
      <div className='p-8 pt-[1.5rem] flex flex-[3] gap-8 flex-col'>
        <Navbar/>
        <div className=' sm:mt-0 sm:text-sm sm:self-center mt-16 bg-[#363d42] rounded-[4rem] w-fit px-[20px] py-[13px] uppercase text-white relative flex items-center justify-start'>
          <div className='absolute bg-[#f48915] w-[5.4rem] h-[80%] left-[8px] rounded-[3rem] z-[1] ' data-aos="fade-right"
     data-aos-offset="500"
     data-aos-easing="ease-in-sine">
          </div>
          <span className='z-[2] '>The Best Fitness Club in the Town</span>
        </div>
        {/* Hero heading */}
        <div className='flex flex-col gap-[1.5rem] uppercase text-[4.5rem] font-bold text-white'>
          <div>
            <span className='stroke-text'>Shape</span>
            <span> Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div className='text-[1rem] font-[200] tracking-[0.1rem] normal-case w-[80%]'>
            <span>
              In here we will help you to shape and build your ideal body and live up your life to fullest
            </span>
          </div>
        </div>
        {/* Hero figures */}
        <div className='flex gap-8'>
          <div className='flex flex-col'>
            <span className='text-[2rem] text-white'>140+</span>
            <span className='normal-case text-[#9c9c9c]'>expert coachs</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[2rem] text-white'>+978</span>
            <span className='normal-case text-[#9c9c9c]'>member joined</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-[2rem] text-white'>+50</span>
            <span className='normal-case text-[#9c9c9c]'>fitness programs</span>
          </div>
        </div>
        {/* buttons */}
        <div className='flex gap-4 font-normal '>
          <button className='text-white p-[0.5rem] bg-[#f48915] hover:bg-[#e7953c] font-bold border-solid border-transparent border-[4px] transition-all  duration-300  hover:cursor-pointer flex items-center'>Get Started</button>
          <button className='text-white p-[0.5rem] bg-transparent w-32  font-bold border-solid border-[#f48915] border-[2px] transition-all  duration-300 hover:cursor-pointer flex items-center hover:bg-[#e49744]'>Learn More</button>
        </div>
      </div>
      <div className='flex-1 relative bg-[#f48915]'>
        <button className='absolute right-[3rem] top-[2rem] text-black p-[0.5rem] bg-white w-32  font-bold border-solid border-[#f48915] hover:text-white hover:bg-[#656565] border-[2px] rounded-[5px] transition-all  duration-300 hover:cursor-pointer flex items-center'>
        Join Now
        </button>
        <motion.div whileInView={{right:"4rem"}} initial={{right:"-1rem"}} transition={transition} className='flex flex-col gap-[1rem] bg-[#464D53] w-fit p-4 items-start absolute right-[4rem] top-[7rem] rounded-[15px]'>
          <img src='assets/heart.png' alt='hero-1' className='w-8'/>
          <span className='text-[#9c9c9c] '>Heart Rate</span>
          <span className='text-white text-[1.5rem]'>116 bpm</span>
        </motion.div>
        <img src='assets/hero_image.png' alt='hero-1' className='absolute top-[10rem] right-[8rem] w-[23rem]'/>
        <motion.img whileInView={{right:"20rem"}} initial={{right:"11rem"}} transition={transition} src='assets/hero_image_back.png' alt='hero-2' className='absolute top-[4rem] right-[20rem] z-[-1] w-[15rem]'/>
      </div> 
      <div className='flex gap-8 bg-[#656565] rounded-[5px] p-4 w-fit absolute top-[32rem] right-[28rem]'>
        <img src='assets/calories.png' alt='hero-4' className='w-[3rem] '/>
        <div className='flex flex-col justify-between'>
          <span className='text-[#9c9c9c]'>Calories</span>
          <span className='text-white text-[1.5rem]'>220</span>
        </div>
      </div>
   {/* hero_image hero_image-back heart calories */}
    </div>
  )
}

export default Hero 


