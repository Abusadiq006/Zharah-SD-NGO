import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Programs />
    </div>
  )
}

export default App
