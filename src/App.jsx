import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './conponents/Navbar'
// import Home from './pages/Home'
// import About from './pages/About.jsx'
import { Home, About } from './pages/index.js'


function App() {

  return (
    // <div>
    //   <Navbar/>
    //   <Home />
    //   <About />
    // </div>
    
    <BrowserRouter>
      <Navbar />
      {/* <About /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
