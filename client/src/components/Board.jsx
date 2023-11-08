import React from 'react';
import InvisibleBoard from './InvisibleBoard';

const Board = (boardId) => {
  const visibleCells = [];
  for (let i = 0; i < 16 * 16; i++) {
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
        <InvisibleBoard boardId={boardId} />
      </div>
    </>
  );
};

export default Board;
