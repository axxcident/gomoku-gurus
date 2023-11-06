import React, { useState } from 'react';
import { addPlayer1 } from '../api/Gamedata';

const Modal = ({ isOpen, closeModal }) => {
    const displayStyle = isOpen ? 'block' : 'none';
    const [playerName, setPlayerName] = useState('');

    const handleAddPlayer = async () => {
      if (playerName) {
        const result = await addPlayer1(playerName);
        console.log(result);
        alert('Player added!');
        window.location.reload();
      }
    }

    return (
      <div className="modal" style={{ display: displayStyle }}>
        <div className="modal-content">
        <button className="close-modal" onClick={closeModal}> ✖ </button>
          <h2>Mata in ett användarnamn</h2>
          <input className="modal-input" type="text" placeholder="Välj ditt namn" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
          <br></br>
        <button onClick={handleAddPlayer} className="modal-cont-btn">Fortsätt</button>
        </div>
      </div>
    );
  }


export default Modal;
