import React, { useState, useEffect } from 'react';
const { getGameData } = require('../api/Gamedata');

const Board = () => {

  const [gameBoardData, setGameBoardData] = useState(null);

  const visibleCells = [];
  for (let i = 0; i < 15 * 15; i++) {
    visibleCells.push(i);
  }
  // const [invisibleCells, setInvisibleCells] = useState(Array(16 * 16).fill(null));
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    getGameData()
      .then(data => {
        // console.log(data["2ca69660-fa1b-45be-b53d-29ea6ca839f9"]); // Log the data object
        setGameBoardData(data["2ca69660-fa1b-45be-b53d-29ea6ca839f9"]);
        // console.log(gameBoardData)
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
    <>
      <div className="board-container">
        <div className='board'>
          {visibleCells.map((cell) => (
            <button key={cell} className='cell'></button>
          ))}
        </div>
        {/* invisibleCells={invisibleCells} */}
        {/* <p> {JSON.stringify(gameBoardData["2ca69660-fa1b-45be-b53d-29ea6ca839f9"], null, 2)} </p> */}
        <InvisibleBoard onClick={handleInvisibleClick} gameBoardData={gameBoardData} />
      </div>
    </>
  );
};

const InvisibleBoard = ({ onClick, gameBoardData }) => {
  return (
    <div className='invisible-board'>
      <div className='i-board'>
      {gameBoardData.board.tiles.map((row, rowIndex) => (
          <div key={rowIndex} className='row'>
            {row.map((cell, colIndex) => (
              <button key={colIndex} className='invisible-cell' onClick={() => onClick(rowIndex, colIndex)}>
                {cell === 1 ? <div className='b-circle'></div> : null}
                {cell === 2 ? <div className='w-circle'></div> : null}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Board;
