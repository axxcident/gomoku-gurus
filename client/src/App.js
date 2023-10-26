import logo from './logo.svg';
import './App.css';
// import Board from './components/Board';
import Testboard from './components/Testboard';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="GomokuGurus-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Testboard className="board-container" />
    </div>
  );
}

export default App;
