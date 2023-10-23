import React from 'react'

const Board = () => {
  const cells = [];
  for (let i = 0; i < 15 * 15; i++) {
    cells.push(<div key={i} className='cell'></div>);
  }
  return (
    <>
    <div className="board-container">
      <h5>
      Board
      </h5>
      <div className='board'>
        {/* {cells.map(cell => {
          <div key={i} className='cell'></div>
        })} */}
      {cells}
      </div>
    </div>
    </>
  )
}

export default Board
