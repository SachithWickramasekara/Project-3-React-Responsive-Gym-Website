import React from 'react'
import {programsData} from '../data/programsData'
const Programs = () => {
  return (
    <div className='flex flex-col gap-8 px-0 py-4 ' id='programs'>
      <div className='flex gap-[5rem] font-bold text-[3rem] justify-center text-white uppercase'>
        <span className='stroke-text'>Explore</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
      </div>
      <div className='flex gap-4'>
        {programsData.map((program)=>(
          <div className='flex flex-col bg-[#9c9c9c] p-8 gap-4 text-white justify hover:bg-gradient-to-r from-[#fa5042] to-[#ffa739]'>
            {program.image}
            <span className='text-4 font-bold'>
              {program.heading}
            </span>
            <span className='text-[0.9rem] leading-[25px]'>
              {program.details}
            </span>
            <div className='flex items-center gap-8'>
              <span>Join Now</span>
              <img src='assets/rightArrow.png' alt='programs-1 ' className='w-4'/>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Programs