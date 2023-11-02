import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
    const displayStyle = isOpen ? 'block' : 'none';

    return (
      <div className="modal" style={{ display: displayStyle }}>
        <div className="modal-content">
        <button className="close-modal" onClick={closeModal}> ✖ </button>
          <h2>Mata in ett användarnamn</h2>
          <input className="modal-input" type="text" />
          <br></br>
        <button className="modal-cont-btn">Fortsätt</button>
        </div>
      </div>
    );
  }


export default Modal;
