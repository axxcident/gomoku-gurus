import { createContext, useContext, useState } from 'react';

const GameDetailsContext = createContext();

export const useGameDetails = () => {
  return useContext(GameDetailsContext);
};

export const GameDetailsProvider = ({ children }) => {
  const [gameDetails, setGameDetails] = useState({
    round: 0,
    playerTurn: 1,
    state: 'Nytt Spel',
  });

  return (
    <GameDetailsContext.Provider value={{ gameDetails, setGameDetails }}>
      {children}
    </GameDetailsContext.Provider>
  );
};
