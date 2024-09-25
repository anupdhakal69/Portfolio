import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { ToastContainer, Zoom ,Slide, Flip} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './pages/Portfolio'



const App = () => {
  return (
    <div> 
      <Navbar />
      {/* <ToastContainer theme='dark' autoClose={2500} transition={Flip} position='top-right'/> */}
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App
