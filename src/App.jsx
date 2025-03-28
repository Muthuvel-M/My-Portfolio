import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'
import Project from './components/Projects'

function App() {
  return (
    <>
    {/* Navbar section */}
      <Navbar/>
      {/* Home section */}
      <Home />
      <Project />
    </>
  )
}

export default App
