import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
