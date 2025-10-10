import { useState } from 'react'
import Navbar from './conponents/Navbar'
import Home from './conponents/Home'
import About from './conponents/About'
import Skills from './conponents/Skills'
import Contact from './conponents/Contact'
import Projects from './conponents/Projects'
import Footer from './conponents/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home  />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
