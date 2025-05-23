import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/lms_logo.png' 
import {assets} from '../../assets/assets'
import userimg from "../../assets/user.png"
import { useClerk,UserButton,useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/Appcontext'

const Navbar = () => {

  const {openSignIn}=useClerk()
  const {user}=useUser()
  const {navigate,isEducator}=useContext(AppContext)

  return (
    <div className='flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b bg-gradient-to-b from-green-200 border-gray-500 py-4'>
        <img onClick={()=>navigate('/')} src={assets.lms_logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
        <div className='hidden md:flex items-center gap-5 text-gray-500'>
            <div className='flex items-center gap-5'>
                {<>
                  <button className='cursor-pointer' onClick={()=>navigate('/educator')}>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button> 
                | <Link to="my-enrollments">My Enrollments</Link>
                </>}
            </div>
{user ? <UserButton/>: <button onClick={()=>{openSignIn()}}  className='bg-green-800 text-white px-5 py-2 rounded-full cursor-pointer'>Create Account</button>}        </div>
{/* {for phone screens} */}
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
        
            <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
            {<>
              <button className='cursor-pointer' onClick={()=>navigate('/educator')}>{isEducator ? 'Educator Dashboard': 'Become Educator'}</button> 
              | <Link to="my-enrollments">My Enrollments</Link>
                </>}
            </div>
            {user ? <UserButton/>: <button onClick={()=>{openSignIn()}}><img src={userimg} alt="user" width={30} height={30} /></button>} 
        </div>

    </div>
  )
}

export default Navbar
