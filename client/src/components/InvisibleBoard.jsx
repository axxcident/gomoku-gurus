import React, {useEffect, useState} from 'react'
const { getGameBoard, clickTile } = require('../api/Gamedata');

const InvisibleBoard = (boardId) => {
  const [gameBoardData, setGameBoardData] = useState(null);
  const [isBlack, setIsBlack] = useState(true);
  const playerProfileData = localStorage.getItem('playerName');
  const playerName = playerProfileData ? JSON.parse(playerProfileData).playerName : null;


  useEffect(() => {
    // console.log(boardId.boardId.boardId)
    getGameBoard(boardId.boardId.boardId)
      .then(data => {
        setGameBoardData(data);
        JSON.stringify(gameBoardData, null, 2)
      })
      .catch(error => console.error(error));
  }, []);

  const handleInvisibleClick = (rowIndex, colIndex) => {
    console.log(`invisible click is row: ${rowIndex} and column: ${colIndex}`)
    gameBoardData.board.tiles[rowIndex][colIndex] = isBlack ? 1 : 2;
    console.log(boardId.boardId.boardId, rowIndex, colIndex, playerName, isBlack ? 1 : 2)
    clickTile(boardId.boardId.boardId, rowIndex, colIndex, playerName, isBlack ? 1 : 2);
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
