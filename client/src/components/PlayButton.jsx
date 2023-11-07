import React, {useState} from 'react'
import { Link, useNavigate  } from 'react-router-dom';
import {createNewGameBoard} from '../api/Gamedata';

function PlayButton() {
  const navigate = useNavigate();
  const [boardId, setBoardId] = useState(null);

  const createGame = async () => {
    try {
      const response = await createNewGameBoard();
      setBoardId(response.boardId);
      navigate(`/spelSida/${response.boardId}`);
    } catch (error) {
      console.error(error);
    }
  }

  // const boardId = '2ca69660-fa1b-45be-b53d-29ea6ca839f9';

  return (
    <>
    <div>
      {boardId ? (
          <Link to={`/spelSida/${boardId}`}>
            <button className='start-button'>Börja spela</button>
          </Link>
        ) : (
          <button onClick={createGame} className='start-button'>Skapa nytt spel</button>
        )}
    </div>
    </>
  )
}

export default PlayButton
