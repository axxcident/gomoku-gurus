import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import { addPlayer1 } from '../api/Gamedata';

const LogInModal = ({ isOpen, closeModal }) => {
    const displayStyle = isOpen ? 'block' : 'none';
    const [playerName, setPlayerName] = useState('');
    const playerNamelocal = JSON.parse(localStorage.getItem('playerName'));

    // const handleAddPlayer = async () => {
    //   if (playerName) {
    //     // const result = await addPlayer1(playerName);
    //     // console.log(result);
    //     // alert('Player added!');
    //     window.location.reload();
    //   }
    // }
    const stopPropagation = (e) => {
      e.stopPropagation(); // Prevent the click event from propagating up
  };

    const createProfile = async () => {
      const findProfile = localStorage.getItem('playerName');
      if (findProfile) {
        setPlayerName(findProfile.playerName);
        window.location.reload();
      } else {
        const uniqueId = uuidv4();
        const playerNameObj = {
          id: uniqueId,
          playerName: playerName,
        };
        // Spara i localStorage
        localStorage.setItem('playerName', JSON.stringify(playerNameObj));
        setPlayerName("");
        // window.location.reload();
        }
      }

    return (
      <div className="modal" style={{ display: displayStyle }} onClick={closeModal}>
        <div className="modal-content" onClick={stopPropagation}>
          {playerNamelocal ?
          (
            <h2>Välkommen {playerNamelocal.playerName}</h2>
          ) : (
          <>
            <button className="close-modal" onClick={closeModal}>✖</button>
              <h2>Mata in ett användarnamn</h2>
              <input className="modal-input" type="text" placeholder="Välj ditt namn" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
              <br></br>
            <button onClick={createProfile} className="modal-cont-btn">Fortsätt</button>
          </>
          )
          }

        </div>
      </div>
    );
  }


export default LogInModal;
