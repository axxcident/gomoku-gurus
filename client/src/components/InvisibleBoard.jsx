import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
const { getGameBoard, clickTile } = require('../api/Gamedata');

const InvisibleBoard = () => {
  const { boardId } = useParams();
  const [gameBoardData, setGameBoardData] = useState(null);
  const [isBlack, setIsBlack] = useState(true);

  useEffect(() => {
    getGameBoard(boardId)
      .then(data => {
        setGameBoardData(data);
        JSON.stringify(gameBoardData, null, 2)
      })
      .catch(error => console.error(error));
  }, []);

  const handleInvisibleClick = (rowIndex, colIndex) => {
    console.log(`invisible click is row: ${rowIndex} and column: ${colIndex}`)
    gameBoardData.board.tiles[rowIndex][colIndex] = isBlack ? 1 : 2;
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
