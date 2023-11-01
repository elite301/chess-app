import { useContext } from 'react';
import { GameContext } from './GameContext';

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
