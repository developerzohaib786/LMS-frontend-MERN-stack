import React, { useContext,useState,useEffect } from 'react'
import { AppContext } from '../../context/Appcontext'
import SearchBar from '../../components/student/SearchBar';
import { useParams } from 'react-router-dom';
import CourseCard from '../../components/student/CourseCard'


const CourseList = () => {

  const {navigate}=useContext(AppContext);
  const {input}=useParams();
  const {allCourses}=useContext(AppContext);

  const [filteredCourse, setFilteredCourses] = useState([]);

  // useEffect(() => {
  // if(allCourses && allCourses.length>0){
  //   const tempCourses=allCourses.slice();

  //   input >
  // }
  //   }
  // }, [allCourses, input]);
  
  

  return (
    <>
    <div className='relative md:px-36 px-8 pt-20 text-left'>
      <div className='flex md:flex-row flex-col gap-6 items-start justify-between w-full '>
      <div>
      <h1 className='text-4xl text-gray-800 font-semibold'>Course List</h1>
        <p className='text-gray-500'>
          <span onClick={()=>{navigate('/')}} className='text-blue-500 cursor-pointer'>Home</span> / <span>Course List</span>
        </p>
      </div>
      <SearchBar data={input}/>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 px-2 md:p-0'>
        {allCourses.map((course,index)=><CourseCard key={index} course={course}/>)}
      </div>
    </div>
    </>
  )
}

export default CourseList
