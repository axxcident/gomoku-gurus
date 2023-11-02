
import React, { useState } from 'react';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import SpelSida from './pages/SpelSida.jsx';
import './App.css';
// import Testboard from './components/Testboard';
// import Board from './components/Board';
import Navbar from './components/Navbar';
import Modal from './components/LogInModal';
import { Route, Routes } from "react-router-dom";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    }
    const closeModal = () => {
      setIsModalOpen(false);
    }

  return (
    <>
      <Navbar openModal={openModal} />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/spelSida' element={<SpelSida/>} />
        {/* <Route path='/gameplay' element={ <Gameplay /> } />
        <Route path='/contact' element={ <Contact /> } />  */}
      </Routes>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
       {/* <Section className="main-container" /> */}
      {/* <Testboard className="board-container" />
      <Board /> */}
    </>
  );
}

export default App;
