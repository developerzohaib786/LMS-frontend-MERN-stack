import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-green-300'>
      <h1 className='md:text-home-heading-large text-3xl relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower your future with the courses designed to <span className='text-green-600'>fit your choice </span></h1>
   <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We bring world class instructors, interactive content and a supoortive community to help you achieve your personal and professional goals.</p>
   <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring world class instructors to help you  professional goals.</p>
    </div>
  )
}

export default Hero
