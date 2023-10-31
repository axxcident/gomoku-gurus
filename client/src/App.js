import logo from './logo.svg';
import './App.css';
// import Board from './components/Board';
import Testboard from './components/Testboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About.jsx';

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>

        <div className="App">
          <header>
            <img src={logo} className="GomokuGurus-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </header>
          <Testboard className="board-container" />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
