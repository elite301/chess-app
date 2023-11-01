import { Chess, Color } from 'chess.js';
import { GameContextType } from 'contexts/GameContext/GameContext';

export const gameContextIntialValue: GameContextType = {
  chess: new Chess(),
  setChess: (chess: Chess) => console.log(chess),
  isOver: false,
  setIsOver: (isOver: boolean) => console.log(isOver),
  turn: 'w',
  setTurn: (turn: Color) => console.log(turn),
};
