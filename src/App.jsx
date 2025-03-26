import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Home } from './components/Home'

function App() {
  return (
    <>
    {/* Navbar section */}
      <Navbar/>
      {/* Home section */}
      <Home />
    </>
  )
}

export default App
