// import { useState } from 'react'
// import Subject from './components/student/subject/Subject'
import './App.css'
// import Counter from './components/state/Counter'
// import Colour from './components/state/Colour'
// import { Dataset } from './data/Dataset'
// import Students from './components/state/Students.jsx'
// import Githubusers from './components/Githubusers'
// import Usereffect from './components/Usereffect'
// import Userinput from './components/Userinput'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Users from './components/User.jsx'
// import UserDetails from './components/Userdetail.jsx'
import Createstudent from './components/student/Createstudent.jsx'




function App() {

  return (
    <div>

      <Createstudent/>

    {/* // Routing between Users and UserDetails components */}
    
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Userinput/> */}
      {/* <Usereffect/> */}
      {/* <Githubusers/> */}
      {/* <Students/> */}

      {/* <Counter/> */}
      {/* <Colour/> */}
      {/* <Dataset/> */}

    </div>

  )
}

export default App
