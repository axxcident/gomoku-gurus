import React from 'react'
import Home from './pages/Home.jsx'
import './App.css';
// import Testboard from './components/Testboard';
// import Board from './components/Board';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() { 
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        {/* <Route path='/about' element={ <About /> } />
        <Route path='/gameplay' element={ <Gameplay /> } />
        <Route path='/contact' element={ <Contact /> } /> */}
      </Routes>
       {/* <Section className="main-container" /> */}
      {/* <Testboard className="board-container" />
      <Board /> */}
    </>
  );
}

export default App;
