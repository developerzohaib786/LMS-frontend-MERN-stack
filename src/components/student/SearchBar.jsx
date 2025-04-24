import React, { useState } from 'react'
import serch from '../../assets/search_icon.svg' 
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate=useNavigate();
  const [input,setInput]=useState(data ? data:'')
  const onSearchHandler=(e)=>{
    e.preventDefault();
    navigate("/course-list/"+input)
  }
  return (
    <div>
      <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-grey-500/20 rounded'>
        <img src={serch} alt="Search Icon" className='md:w-auto w-10 px-3' />
        <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Search for courses' className='w-full h-full outline-none text-grey-500/80'/>
        <button type='submit' className="bg-green-800 rounded text-white md:px-10 px-7 md:py-3 py-2 mx-1">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
