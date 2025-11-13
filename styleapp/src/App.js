import React from 'react'
import Student from './components/student/Student.js'
export default function App() {
  return (
    <div>
      <Student>my subject</Student>
      <Student>
        <p>Maths</p>
        <p>English</p>
      </Student>
      <Student>
        <ol>
          <li>Tamil</li>
          <li>Science</li>
        </ol>
      </Student>
      <Student>my subject</Student>

    </div>
  )
}



