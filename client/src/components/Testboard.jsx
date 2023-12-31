import React, { useEffect, useState } from 'react';
const { getGameData, createNewGameBoard } = require('../api/Gamedata');

const Testboard = () => {
  const [gameData, setGameData] = useState(null);
  const cells = [];
  for (let i = 0; i < 15 * 15; i++) {
    cells.push(<div key={i} className='cell'></div>);
  }

  useEffect(() => {
    getGameData()
      .then(data => setGameData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className='board-container'>
      <h5>Testboard</h5>
      <button onClick={() => {
        createNewGameBoard();
        window.location.reload();
      }}
        >create new board</button>
      {gameData ? (
        <p>{JSON.stringify(Object.keys(gameData), null)}</p>
        // <pre>{JSON.stringify(gameData.name, null, 2)}</pre>
      ) : (
        <p>Loading game data...</p>
      )}
      <div className='board'>
        {/* {cells.map(cell => {
          <div key={i} className='cell'></div>
        })} */}
      {cells}
      </div>
    </div>
  );
};

export default Testboard;
