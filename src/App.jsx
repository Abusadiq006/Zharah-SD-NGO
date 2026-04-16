import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import Contact from './sections/Contact'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Programs />
      <Contact />
    </div>
  )
}

export default App
