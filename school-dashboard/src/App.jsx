import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './components/layouts/Header'
import Master from './components/layouts/Master'
import Sidebar from './components/layouts/Sidebar'

function App() {

  return (
    <>
      <div className="fixed top-0 left-0 flex p-4 gap-4">
        <Header />
      </div>
      <div className="pt-16">
        <Master />
      </div>
      <div className="fixed bottom-4 right-4 text-gray-500">
        <Sidebar />
      </div>
    </>
  )
}

export default App
