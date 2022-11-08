import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between'>
      <img src='assets/logo.png' alt='logo' className='w-[10rem] h-[3rem]'/>
      <ul className='list-none flex gap-8 text-white'>
        <li className='hover:text-[#f48915] cursor-pointer'>Home</li>
        <li className='hover:text-[#f48915] cursor-pointer'>Programs</li>
        <li className='hover:text-[#f48915] cursor-pointer'>Why us</li>
        <li className='hover:text-[#f48915] cursor-pointer'>Plans</li>
        <li className='hover:text-[#f48915] cursor-pointer'>Testimonials</li>
      </ul>
    </div>
  )
}

export default Navbar