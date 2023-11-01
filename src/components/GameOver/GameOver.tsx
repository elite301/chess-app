import React, { useCallback } from 'react';
import { useGameContext } from 'contexts/GameContext/useGameContext';
import { Button, Modal } from 'react-bootstrap';
import { Chess } from 'chess.js';

const GameOver = () => {
  const { isOver, setChess, setIsOver } = useGameContext();

  const onRestart = useCallback(() => {
    setChess(new Chess());
    setIsOver(false);
  }, [setChess, setIsOver]);

  return (
    <>
      <Modal show={isOver} backdrop='static' centered>
        <Modal.Body>
          <div className='d-flex flex-column align-items-center p-2 gap-2'>
            <p className='fs-1 fw-bold'>Game finished</p>
            <Button variant='primary' className='w-100 fs-4' onClick={onRestart}>
              Restart
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default GameOver;
