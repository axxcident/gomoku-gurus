import React from 'react'
import Section from './components/Section.jsx'
import './App.css';
import Testboard from './components/Testboard';
import Board from './components/Board';
import Navbar from './components/Navbar';
// import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/gameplay' element={ <Gameplay /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes> */}
      <Navbar />
    <div className="App">
      <main>
       <Section className="main-container" />
      </main>
    </div>
      <Testboard className="board-container" />
      <Board />
    </>
  );
}

export default App;
