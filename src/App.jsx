import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/student/Home'
import CourseList from './pages/student/CourseList'
import Coursedetails from './pages/student/Coursedetails'
import MyEnrollements from './pages/student/MyEnrollements'
import Player from './pages/student/Player'
import Loading from './pages/student/Loading'
import NotFound from './pages/student/NotFound'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import Navbar from './components/student/Navbar'

const App = () => {
  return (
    <div className='text-default min-h-screen bg-white'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/course-list" element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>}/>
        <Route path='/course/:id' element={<Coursedetails/>}/>
        <Route path='/my-enrollments' element={<MyEnrollements/>}/>
        <Route path='/player/:courseId' element={<Player/>}/>
        <Route path='/loading/:path' element={<Loading/>}/>
        <Route path='*' element={<NotFound />} />
        <Route path='/educator' element={<Educator/>}>
        <Route path='educator' element={<Dashboard/>}/>
        <Route path='add-course' element={<AddCourse/>}/>
        <Route path='my-courses' element={<MyCourses/>}/>
        <Route path='student-enrolled' element={<Dashboard/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
