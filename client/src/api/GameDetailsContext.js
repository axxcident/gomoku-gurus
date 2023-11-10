import { createContext, useContext, useState } from 'react';

const GameDetailsContext = createContext();

export const useGameDetails = () => {
  return useContext(GameDetailsContext);
};

export const GameDetailsProvider = ({ children }) => {
  const [gameDetails, setGameDetails] = useState({
    round: 1,
    playerTurn: 1,
    state: 'new',
  });

  return (
    <GameDetailsContext.Provider value={{ gameDetails, setGameDetails }}>
      {children}
    </GameDetailsContext.Provider>
  );
};
