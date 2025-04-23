import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png' 
import user from "../../assets/user.png"
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'

const Navbar = () => {

  const {openSignIn}=useClerk()
  const {user}=useUser()

  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4'>
        <img src={logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-5'>
                {
                  <button>Become Educator</button> 
                | <Link to="my-enrollments">My Enrollments</Link>}
            </div>
{user ? <UserButton/>: <button onClick={()=>{openSignIn()}}  className='bg-green-800 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}        </div>
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        <div className='md:hidden flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-5'>
                <button>Become Educator</button> 
                | <Link to="my-enrollments">My Enrollments</Link>
            </div>
            <button><img src={user} alt="user" width={30} height={30} /></button>
        </div>
        </div>

    </div>
  )
}

export default Navbar
