import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Programs from './sections/Programs'
import Contact from './sections/Contact'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Contact />
      <footer className="site-footer">
        <div className="container">
          <p>Zharah SD Initiative Foundation exists to empower young women through education, health, and practical skills.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
