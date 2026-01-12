import React from 'react'
import './Mainindex.css'
import Header from './layouts/Header'
import Sidebar from './layouts/Sidebar'
import Content from './layouts/Content'
import { Routes, Route } from 'react-router-dom'
import StudentIndex from './pages/student/Index'
import StudentCreate from './pages/student/Create'

export default function Mainindex() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className='container'>
        <Sidebar />
        <Content />
        <Routes>
          <Route path='/' element={<StudentIndex />} />
          <Route path='/student/create' element={<StudentCreate />} />
        </Routes>
      </div>
    </div>
  )
}
