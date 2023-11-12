import React, { useState } from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SpelSida from './pages/SpelSida.jsx';
import './App.css';
import Navbar from './components/Navbar'
import LogInModal from './components/LogInModal'
import Footer from './components/footer.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
      setIsModalOpen(true)
  }
  const closeModal = () => {
      setIsModalOpen(false)
  }

  return (
    <>
      <Navbar openModal={openModal} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/spelSida/:boardId' element={<SpelSida/>} />
      </Routes>
      <LogInModal isOpen={isModalOpen} closeModal={closeModal} />
      <Footer />
    </>
    )
}

export default App
