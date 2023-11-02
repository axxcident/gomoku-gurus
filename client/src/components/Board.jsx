import React, { useState } from 'react';

const Board = () => {
  const [cells, setCells] = useState(Array(15 * 15).fill(null));
  const [invisibleCells, setInvisibleCells] = useState(Array(16 * 16).fill(null));
  const [isBlack, setIsBlack] = useState(true);

  const handleClick = (i) => {
    const newCells = [...cells];
    newCells[i] = isBlack ? 'b-circle' : 'w-circle';
    setCells(newCells);
  };

  const handleInvisibleClick = (i) => {
    const newInvisibleCells = [...invisibleCells];
    newInvisibleCells[i] = isBlack ? 'b-circle' : 'w-circle';
    setInvisibleCells(newInvisibleCells);
    setIsBlack(!isBlack);
  };

  return (
    <>
      <div className="board-container">
        {/*<h5>Board</h5>*/}
        <div className='board'>
          {cells.map((cell, i) => (
            <button key={i} className='cell'></button>
          ))}
        </div>
        <InvisibleBoard onClick={handleInvisibleClick} invisibleCells={invisibleCells} />
      </div>
    </>
  );
};

const InvisibleBoard = ({ onClick, invisibleCells }) => {
  return (
    <div className='invisible-board'>
      <div className='i-board'>
        {invisibleCells.map((cell, i) => (
          <button key={i} className='invisible-cell' onClick={() => onClick(i)}>
            {cell === 'b-circle' ? <div className='b-circle'></div> : null}
            {cell === 'w-circle' ? <div className='w-circle'></div> : null}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Board;
