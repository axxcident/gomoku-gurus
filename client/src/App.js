import React, { useState } from 'react';
import './App.css';
import Testboard from './components/Testboard';
import Board from './components/Board';
import Navbar from './components/Navbar';
import Modal from './components/LogInModal';
// import { Route, Routes } from "react-router-dom";

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
      {/* <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/gameplay' element={ <Gameplay /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes> */}
      <Navbar openModal={openModal} />
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <Testboard className="board-container" />
      <Board />
    </>
  );
}

export default App;
