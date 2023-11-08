import React, {useEffect,useState} from 'react'
import Board from '../components/Board'
import { useParams } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import {BsFillClockFill} from"react-icons/bs";


function SpelSida() {
  const { boardId } = useParams();
const [time, setTime] = useState(120) // sätter timer 120 seconder = 2 minuter
  const goBack = ()=>{
    window.history.back()
  }

  const refreshGame = ()=>{
    window.location.reload();
  }
  
  useEffect(()=>{
    const timer = setInterval (()=>{
      if(time > 0 ) {
        setTime ((pervTime) => pervTime -1);

      }
    }, 1000)
  return () => {
    clearInterval (timer);
  }
  }, [time])
 //formatera tiden i minuter och sekunder
 const minutes = Math.floor(time/60)
 const seconds= time % 60;
 const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2,'0')}`;
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
            <p> {formattedTime}</p>
            <BsFillClockFill className='icons'/>
            <p>{formattedTime}</p>
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
