import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router';
import { useGameDetails } from '../api/GameDetailsContext';
const { getGameBoard, clickTile, changeBoardState, incrementRounds } = require('../api/Gamedata');
const {checkFiveInARow} = require('../api/Wincheck');

const InvisibleBoard = () => {
  const { gameDetails, setGameDetails } = useGameDetails();
  const { boardId } = useParams();
  const [gameBoardData, setGameBoardData] = useState(null);
  const [boardProp, setBoardProp] = useState(null);
  const [isBlack, setIsBlack] = useState(true);
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

  const handleStateGame = async () => {
    try {
      await changeBoardState(boardId, 'Spelar');
      setGameDetails({ ...gameDetails, state: 'Spelar' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleIncrementRounds = async () => {
    try {
      await incrementRounds(boardId);
      setGameDetails({ ...gameDetails, round: gameDetails.round + 1 });
    } catch (error) {
      console.error(error);
    }
  };

  const handleInvisibleClick = (rowIndex, colIndex) => {
    // Kolla om första drag har skett
    if(!gameBoardData.board.tiles.some(row => row.some(cell => cell !== 0))) {
      handleStateGame();
    }
    // Lägg till drag i totalMoves
    handleIncrementRounds();
    // lägger 1 eller 2 i arrayen/brädan i frontend
    gameBoardData.board.tiles[rowIndex][colIndex] = isBlack ? 1 : 2;
    // lägger 1 eller 2 i arrayen/brädan i backend
    clickTile(boardId, rowIndex, colIndex, playerName, isBlack ? 1 : 2);
    // Kollar ifall spel är vunnet
    let speletvunnet = checkFiveInARow(boardProp.board.tiles, isBlack ? 1 : 2 );
    if (speletvunnet === true) {
      alert(`Spelare ${isBlack ? 1 : 2} har vunnit`)
    }
    else {
      console.log("Ingen vinnare än")
    }
    // Andra spelares tur
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
