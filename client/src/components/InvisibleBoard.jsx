import React, {useEffect, useState} from 'react'
const { getGameBoard } = require('../api/Gamedata');

const InvisibleBoard = () => {
  const [gameBoardData, setGameBoardData] = useState(null);
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    getGameBoard("2ca69660-fa1b-45be-b53d-29ea6ca839f9")
      .then(data => {
        setGameBoardData(data);
        JSON.stringify(gameBoardData, null, 2)
      })
      .catch(error => console.error(error));
  }, []);

  const handleInvisibleClick = (rowIndex, colIndex) => {
    console.log(`invisible click is row: ${rowIndex} and column: ${colIndex}`)
    gameBoardData.board.tiles[rowIndex][colIndex] = isBlack ? 1 : 2;
    // const newInvisibleCells = [...invisibleCells];
    // newInvisibleCells[i] = isBlack ? 'b-circle' : 'w-circle';
    // setInvisibleCells(newInvisibleCells);
    setIsBlack(!isBlack);
  };


  return (
    <div className='invisible-board'>
      <div className='i-board'>
      {
      gameBoardData ? (
        gameBoardData.board.tiles.map((row, rowIndex) => (
          <div key={rowIndex} className='invisible-row'>
            {row.map((cell, colIndex) => (
              <button key={colIndex} className='invisible-cell' onClick={() => handleInvisibleClick(rowIndex, colIndex)}>
                {cell === 1 ? <div className='b-circle'></div> : null}
                {cell === 2 ? <div className='w-circle'></div> : null}
              </button>
            ))}
          </div>
        ))
      ) : (
        <p>Loading game data...</p>
      )
      }
      </div>
    </div>
  );
}

export default InvisibleBoard
