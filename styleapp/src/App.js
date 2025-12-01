import React from 'react'
import Student from './components/student/Student.js'
import Subject from './components/student/subject/Subject.js'
export default function App() {
  return (
    <div>
      <Student fname="Thadshajini" lname="Thadsha" grade="10B"><Subject /></Student>
      <hr />
      <Student fname="Kopitha" lname="Kopi" grade="11B"><Subject /></Student>
      <hr />
      <Student fname="Archchna" lname="Jena" grade="10A"><Subject /></Student>
      <hr />
      <Student fname="Sumistry" lname="Sumi" grade="11C"><Subject /></Student>
      <hr />
      <Student fname="Sankeetha" lname="Kavi" grade="10G"><Subject /></Student>
      <hr />
    </div>
  )
}



