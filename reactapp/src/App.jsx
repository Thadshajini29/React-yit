import { useState } from 'react'
import Student from './components/student/Student'
import Subject from './components/student/subject/Subject'
import './App.css'
import Counter from './components/state/Counter'
import Colour from './components/state/Colour'

function App() {

  return (
    <div>
      {/* <Counter/> */}
      <Colour/>
    
    </div>
    // <div>
    //   <Student fname="Thadshajini" lname="Thadsha" grade="10B"><Subject /></Student>
    //   <hr />
    //   <Student fname="Kopitha" lname="Kopi" grade="11B"><Subject /></Student>
    //   <hr />
    //   <Student fname="Archchna" lname="Jena" grade="10A"><Subject /></Student>
    //   <hr />
    //   <Student fname="Sumistry" lname="Sumi" grade="11C"><Subject /></Student>
    //   <hr />
    //   <Student fname="Sankeetha" lname="Kavi" grade="10G"><Subject /></Student>
    //   <hr />
    // </div>
  )
}

export default App
