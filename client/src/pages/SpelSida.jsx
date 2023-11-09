import React, {useEffect,useState} from 'react'
import Board from '../components/Board'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowClockwise } from "react-icons/bs";
import {BsFillClockFill} from"react-icons/bs";


function SpelSida() {
  const [time, setTime] = useState(0);
  const goBack = ()=>{
    window.history.back()
  }

  const refreshGame = ()=>{
    window.location.reload();
  }
  // logi för timer
  useEffect(() => {

    let timer;

    if (time >= 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // öka tiden när timer startar
      }, 1000);
    }

    return () => {
      clearInterval(timer); // clearInterval rensar tiden om man börjar ett nytt spel
    };
  }, [time]);

  // Funktion för att stoppa timern när spelet är över (vi behöver funktion för att avgöra om spelet är klart
  const stopTimer = () => {
    setTime(-1); // ställ in timern för negativ värde för att stoppa den
  };

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

        <Board />
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
