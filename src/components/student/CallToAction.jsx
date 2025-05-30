import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn Anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eum rem repellat vero a rerum esse, similique ducimus veniam recusandae.</p>
      <div className='flex items-center font-medium gap-6 mt-4 '>
        <button className='px-10 cursor-pointer py-3 rounded-md text-white bg-green-800'>Get Started</button>
        <button className='px-6 py-3 cursor-pointer rounded-md text-white bg-green-800 flex gap-3 items-center'>Learn More <img src={assets.arrow_icon} alt="arrow" /></button>
    
      </div>
    </div>
  )
}

export default CallToAction
