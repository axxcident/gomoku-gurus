import React from 'react'
import Board from '../components/Board'
import Timer from '../components/Timer';
import GameDetails from '../components/GameDetails';
import { resetGameBoard, changeBoardState, zeroRounds, resetPlayerTurn } from '../api/Gamedata';
import { useParams } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import {BsFillClockFill} from"react-icons/bs";

function SpelSida() {
  const { boardId } = useParams();

  const goBack = ()=>{
    window.history.back()
  }

// klick event som hanterar data återställning
 const handleReset = async () => {
    try {
      await resetGameBoard(boardId);
      await changeBoardState(boardId, "Nytt spel");
      await zeroRounds(boardId);
      await resetPlayerTurn(boardId);
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
            <button onClick={handleReset}>Omstart</button>
          </div>
          <div className='game-info'>
            <p className='black-circle'></p>
            <p></p>
            <p className='white-circle'></p>
          </div>
        </div>
        {/* Byt ut Board mot <ListGames /> */}
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
    <GameDetails />
  </div>)
}

export default SpelSida
