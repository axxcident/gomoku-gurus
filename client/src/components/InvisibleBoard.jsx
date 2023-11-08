import React, {useEffect, useState} from 'react'
const { getGameBoard, clickTile } = require('../api/Gamedata');
const {checkFiveInARow} = require('../api/Wincheck');

const InvisibleBoard = (boardId) => {
  const [gameBoardData, setGameBoardData] = useState(null);
  const [boardProp, setBoardProp] = useState(null);
  const [isBlack, setIsBlack] = useState(true);
  const [gameState, setgameState] = useState(false);
  const playerProfileData = localStorage.getItem('playerName');
  const playerName = playerProfileData ? JSON.parse(playerProfileData).playerName : null;


  useEffect(() => {
    // console.log(boardId.boardId.boardId)
    getGameBoard(boardId.boardId.boardId)
      .then(data => {
        setGameBoardData(data);
        setBoardProp(data);
        JSON.stringify(gameBoardData, null, 2)
      })
      .catch(error => console.error(error));
  }, []);

  const handleInvisibleClick = (rowIndex, colIndex) => {
    gameBoardData.board.tiles[rowIndex][colIndex] = isBlack ? 1 : 2;
    clickTile(boardId.boardId.boardId, rowIndex, colIndex, playerName, isBlack ? 1 : 2);
    let speletvunnet = checkFiveInARow(boardProp.board.tiles, isBlack ? 1 : 2 );
    if (speletvunnet === true) {
      setgameState(true);
      alert(`Spelare ${isBlack ? 1 : 2} har vunnit`)
    }
    else {
      console.log("Ingen vinnare än")
    }
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
