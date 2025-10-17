import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './conponents/Navbar'
import Home from './pages/Home'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';


function App() {

  return (
    // <div>
    //   <Navbar/>
    //   <Home />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Contact />
    // </div>
    
    <BrowserRouter>
      <Navbar />
      {/* <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
