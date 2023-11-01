import React, { useCallback, useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import type { Piece, Square } from 'react-chessboard/dist/chessboard/types';
import { useGameContext } from 'contexts/GameContext/useGameContext';
import TurnPanel from 'components/TurnPanel';

const GameBoard = () => {
  const { chess, setTurn, setIsOver } = useGameContext();
  const [fen, setFen] = useState<string>(chess.fen());

  useEffect(() => {
    setFen(chess.fen());
    setTurn(chess.turn());
  }, [chess, setTurn]);

  const onDrop = useCallback(
    (source: Square, target: Square, piece: Piece) => {
      const movement = {
        from: source,
        to: target,
        promotion: piece[1].toLocaleLowerCase(),
      };

      try {
        chess.move(movement);
        setTurn(chess.turn());
        setFen(chess.fen());
        if (chess.isGameOver()) setIsOver(true);
        return true;
      } catch (err) {
        return false;
      }
    },
    [chess, setIsOver, setTurn],
  );

  return (
    <div className='d-flex w-50'>
      <Chessboard position={fen} onPieceDrop={onDrop} />
      <TurnPanel />
    </div>
  );
};

export default GameBoard;
