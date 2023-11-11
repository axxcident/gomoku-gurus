import React, { useEffect, useState} from 'react'
import { useGameDetails } from '../api/GameDetailsContext';
import { getGameBoard } from '../api/Gamedata';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { boardId } = useParams();
  const { gameDetails, setGameDetails } = useGameDetails();
  const [gameBoardData, setGameBoardData] = useState(null);

  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const newState = await getGameBoard(boardId);
        setGameDetails({
          ...gameDetails,
          state: newState.state,
          round: newState.round,
          playerTurn: newState.playerTurn,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchGameState();
  }, [gameDetails.state, gameDetails.playerTurn, gameDetails.round]);

  return (
    <>
      <div className='game-details'>
        <div className='player'>
          {
            gameDetails.playerTurn === 1 ? (
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
          {/* <p>Totalt antal drag: 0</p> */}
          <p>Totalt antal drag: {gameDetails.round}</p>
        </div>
      </div>
    </>
  )
}

export default GameDetails
