import { Chess, Color } from 'chess.js';
import React, { createContext, useState } from 'react';

type GameContextType = {
  chess: Chess;
  setChess: (chess: Chess) => void;
  turn: Color;
  setTurn: (color: Color) => void;
  isOver: boolean;
  setIsOver: (over: boolean) => void;
};

export const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [chess, setChess] = useState<Chess>(new Chess());
  const [turn, setTurn] = useState<Color>('w');
  const [isOver, setIsOver] = useState<boolean>(false);

  const contextValue: GameContextType = {
    chess,
    setChess,
    turn,
    setTurn,
    isOver,
    setIsOver,
  };

  return <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>;
};
