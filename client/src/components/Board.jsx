import React, {useState} from 'react';
import InvisibleBoard from './InvisibleBoard';
import WinnerPopUp from './WinnerPopUp';
import LosingPopUp from './LosingPopUp';

const Board = () => {

  const [playerOneWon, setPlayerOneWon] = useState(false)
  const [playerTwoWon, setPlayerTwoWon] = useState(false)
  const playOneWinner = () => {
    console.log("Player one won")
    setPlayerOneWon(true)
  }
  const playTwoWinner = () => {
    console.log("Player two won")
    setPlayerTwoWon(true)
  }


  const visibleCells = [];
  for (let i = 0; i < 16 * 16; i++) {
    visibleCells.push(i);
  }

  return (
    <>
      {playerOneWon || playerTwoWon ? (
        <>
          {playerOneWon && <WinnerPopUp />}
          {playerTwoWon && <LosingPopUp />}
        </>
      ) : (
        <div className="board-container">
          <div className="board">
            {visibleCells.map((cell) => (
              <button key={cell} className="cell"></button>
            ))}
          </div>
          <InvisibleBoard playOneWinner={playOneWinner} playTwoWinner={playTwoWinner} />
        </div>
      )}
    </>
  );
};

export default Board;
