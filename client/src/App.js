import './App.css';
import Testboard from './components/Testboard';
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
      <Testboard className="board-container" />
    </>
  );
}

export default App;
