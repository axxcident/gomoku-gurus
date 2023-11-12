import React, {useState} from 'react'
import { useNavigate  } from 'react-router-dom';
import {createNewGameBoard} from '../api/Gamedata';
const { v4: uuidv4 } = require('uuid');

function PlayButton() {
  const navigate = useNavigate();
  const [boardId, setBoardId] = useState(null);
  const playerNamelocal = localStorage.getItem('playerName');
  const [playerName, setPlayerName] = useState(null);

  const createGame = async () => {
    try {
      const response = await createNewGameBoard();
      setBoardId(response.boardId);
      navigate(`/spelSida/${response.boardId}`);
    } catch (error) {
      console.error(error);
    }
  }

  const createProfile = async () => {
    const findProfile = localStorage.getItem('playerName');
    if (findProfile) {
      setPlayerName(findProfile);
    } else {
      const profile = prompt('Ange ditt namn/alias');
      if (profile) {
        const uniqueId = uuidv4();
        const playerName = {
          id: uniqueId,
          playerName: profile,
        };
      // Spara i localStorage
      localStorage.setItem('playerName', JSON.stringify(playerName));
      setPlayerName(profile);
      }
    }
  }

  return (
    <>
    <div>
      {playerNamelocal ? (
        <button onClick={createGame} className='start-button'>Skapa nytt spel</button>
        ) : (
          <button className='start-button' onClick={createProfile}>Skapa profil</button>
        )}
    </div>
    </>
  )
}

export default PlayButton
