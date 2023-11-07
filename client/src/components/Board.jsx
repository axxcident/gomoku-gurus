import React from 'react';
import InvisibleBoard from './InvisibleBoard';

const Board = () => {
  const visibleCells = [];
  for (let i = 0; i < 15 * 15; i++) {
    visibleCells.push(i);
  }

  return (
    <>
      <div className="board-container">
        <div className='board'>
          {visibleCells.map((cell) => (
            <button key={cell} className='cell'></button>
          ))}
        </div>
        <InvisibleBoard />
      </div>
    </>
  );
};

export default Board;
