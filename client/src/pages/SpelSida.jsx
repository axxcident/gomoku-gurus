import React from 'react'
import Board from '../components/Board'
import { useParams } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import {BsFillClockFill} from"react-icons/bs";


function SpelSida() {
  const { boardId } = useParams();

  const goBack = ()=>{
    window.history.back()
  }

  const refreshGame = ()=>{
    window.location.reload();
  }

  return (
    <div className='board-wrapper' >
      <div className='board-con' >
        <div className='board-top'>
          <div>
            <button onClick={refreshGame}>Omstart</button>
          </div>
          <div className='game-info'>
            <p className='black-circle'></p>
            <p></p>
            <p className='white-circle'></p>
          </div>
        </div>

        <Board boardId={boardId}  />
        <div className='board-bottom'> <BsArrowLeft className='icons' onClick={goBack}/>
          <div className='board-timer'>
            <p> 00:05</p>
            <BsFillClockFill className='icons'/>
            <p>00:05</p>
          </div>
          <BsArrowClockwise className='icons' onClick={refreshGame} />
        </div>
    </div>
    <div className='game-details'>
      <div className='player'>
        <p  className='black-circle'></p>
        <p>Spelare</p>
      </div>
      <div>
        <p>spelarstatus : leader</p>
      </div>
      <div>
        <p>Total varv: 0</p>
      </div>
    </div>
  </div>)
}

export default SpelSida
