import React from 'react'

const WhyUs = () => {
  return (
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img class="object-cover object-center rounded" alt="hero" src="https://source.unsplash.com/720x600/?gym"/>
    </div>
    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <span className='font-bold text-3xl text-[#f48915]'>Some reasons </span>
      <h1 class="sm:text-6xl text-3xl mb-4  text-white font-bold"><span className='stroke-text'>Why</span> Choose Us
      </h1>
      <div className='flex flex-col gap-4 text-white'>
      <div className='flex text-[1rem] gap-4'>
        <img src="assets/tick.png" alt=""className='w-8 h-8'/>
        <span>OVER 140+ EXPERT COACHES</span>
      </div>
      <div className='flex text-[1rem] gap-4'>
        <img src="assets/tick.png" alt="" className='w-8 h-8'/>
        <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
      <div className='flex text-[1rem] gap-4'>
        <img src="assets/tick.png" alt="" className='w-8 h-8'/>
        <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
      <div className='flex text-[1rem] gap-4'>
        <img src="assets/tick.png" alt="" className='w-8 h-8'/>
        <span>RELIABLE PARTNERS</span>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default WhyUs