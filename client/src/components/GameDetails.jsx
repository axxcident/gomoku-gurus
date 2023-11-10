import React, { useEffect, useState} from 'react'
import { useGameDetails } from '../api/GameDetailsContext';
import { getGameBoard } from '../api/Gamedata';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { boardId } = useParams();
  const { gameDetails, setGameDetails } = useGameDetails();
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [totalMoves, setTotalMoves] = useState(0);

  // logik för att hämta spelets status
  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const newState = await getGameBoard(boardId);
        setGameDetails({ ...gameDetails, state: newState.state });
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameState();
  }, [boardId]);

  return (
    <>
      <div className='game-details'>
        <div className='player'>
          {
            currentPlayer === 1 ? (
              <p className='black-circle'></p>
            ) : (
              <p className='white-circle'></p>
            )
          }
          <p>Spelare</p>
        </div>
        <div>
          <p>Status: {gameDetails.state}</p>
        </div>
        <div>
          <p>Totalt antal drag: {totalMoves}</p>
        </div>
      </div>
    </>
  )
}

export default GameDetails
