import { useState } from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Student from './components/pages/Student'
import StudentIndex from './components/pages/student/Index'
import StudentCreate from './components/pages/student/Create'
import Mainindex from './components/Mainindex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentIndex />} />
        <Route path='/student/create' element={<StudentCreate />} />
        <Route path="/student" element={<Student />} />
        <Route path="/main" element={<Mainindex />} />
      </Routes>

      {/* <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div> */}
    </BrowserRouter>
  )
}

export default App