import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png' 

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4'>
        <img src={logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div>
                <button>Become Educator</button> 
                | <Link to="my-enrollments">My Enrollments</Link>
            </div>
            <button className='bg-blue-500 text-white px-5 py-2 rounded-full'>Create Account</button>
        </div>
      <h1>Navbar</h1>
    </div>
  )
}

export default Navbar
