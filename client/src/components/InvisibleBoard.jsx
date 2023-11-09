import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
const { getGameBoard, clickTile } = require('../api/Gamedata');
const {checkFiveInARow} = require('../api/Wincheck');

const InvisibleBoard = () => {
  const { boardId } = useParams();
  const [gameBoardData, setGameBoardData] = useState(null);
  const [boardProp, setBoardProp] = useState(null);
  const [isBlack, setIsBlack] = useState(true);
  const [gameState, setgameState] = useState(false);
  const playerProfileData = localStorage.getItem('playerName');
  const playerName = playerProfileData ? JSON.parse(playerProfileData).playerName : null;


  useEffect(() => {
    getGameBoard(boardId)
      .then(data => {
        setGameBoardData(data);
        setBoardProp(data);
      })
      .catch(error => console.error(error));
  }, [boardId]);

  const handleInvisibleClick = (rowIndex, colIndex) => {
    gameBoardData.board.tiles[rowIndex][colIndex] = isBlack ? 1 : 2;
    clickTile(boardId, rowIndex, colIndex, playerName, isBlack ? 1 : 2);
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
    <div className='invisible-board' data-testid="invisible-board">
      <div className='i-board' data-testid="i-board">
      {
      gameBoardData ? (
        gameBoardData.board.tiles.map((row, rowIndex) => (
          <div key={rowIndex} className='invisible-row' data-testid='invisible-row'>
            {row.map((cell, colIndex) => (
              <button key={colIndex} className='invisible-cell' data-testid='invisible-cell' onClick={() => handleInvisibleClick(rowIndex, colIndex)}>
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
