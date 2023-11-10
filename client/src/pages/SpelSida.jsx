import React, { useEffect, useState} from 'react'
import { useGameDetails } from '../api/GameDetailsContext';
import Board from '../components/Board'
import { useParams } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import {BsFillClockFill} from"react-icons/bs";
import { resetGameBoard } from '../api/Gamedata';
import Timer from '../components/Timer';

function SpelSida() {
  const { gameDetails, setGameDetails } = useGameDetails();
  const { boardId } = useParams();
  const [gameStatus, setgameStatus] = useState('new');
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [totalMoves, setTotalMoves] = useState(0);

  const goBack = ()=>{
    window.history.back()
  }

  // logik för att hämta spelets status
  // const fetchGameState = async () => {
  //   try {
  //     const newState = await changeBoardState(boardId, 'New'); // Replace 'New' with the actual initial state you want to fetch.
  //     setGameDetails({ ...gameDetails, state: newState });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

// klick event som hanterar data återställning
 const handleReset = async () => {
    try {
      await resetGameBoard(boardId);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='board-wrapper' >
      <div className='board-con' >
        <div className='board-top'>
          <div>
            <button onClick={handleReset} >Omstart</button>
          </div>
          <div className='game-info'>
            <p className='black-circle'></p>
            <p></p>
            <p className='white-circle'></p>
          </div>
        </div>

        <Board />
        <div className='board-bottom'> <BsArrowLeft className='icons' onClick={goBack}/>
          <div className='board-timer'>
            <Timer />
            <BsFillClockFill className='icons'/>
            <Timer />
          </div>
          <BsArrowClockwise className='icons' />
        </div>
    </div>
    <div className='game-details'>
      <div className='player'>
              {
          currentPlayer === 1 ? (
            <p className='black-circle'></p>
          ) : (
            <p className='white-circle'></p>
          )
        }
        {/* <p className='black-circle'></p> */}
        <p>Spelare</p>
      </div>
      <div>
        <p>Status: {gameDetails.state}</p>
      </div>
      <div>
        <p>Totalt antal drag: {totalMoves}</p>
      </div>
    </div>
  </div>)
}

export default SpelSida
