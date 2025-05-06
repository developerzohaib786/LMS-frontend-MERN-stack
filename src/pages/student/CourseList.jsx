import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import SearchBar from '../../components/student/SearchBar';
import { useParams } from 'react-router-dom';


const CourseList = () => {

  const {navigate}=useContext(AppContext);
  const {input}=useParams();

  return (
    <>
    <div>
      <div>
      <div>
      <h1>Course List</h1>
        <p className='text-gray-500'>
          <span onClick={()=>{navigate('/')}} className='text-blue-500 cursor-pointer'>Home</span>/
          <span>Course List</span>
        </p>
      </div>
      <SearchBar data={input}/>
      </div>
    </div>
    </>
  )
}

export default CourseList
