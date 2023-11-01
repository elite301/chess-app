import React from 'react';
import { Ring } from 'react-css-spinners';
import classNames from 'classnames';
import { useGameContext } from 'contexts/GameContext/useGameContext';
import './TurnPanel.styles.css';

const TurnPanel = () => {
  const { turn, isOver } = useGameContext();

  return (
    <div
      className={classNames('turn-container', { 'white-turn': turn === 'w' })}
      data-testid='turn-panel'
    >
      <Ring color='#0598ce' size={40} className={classNames({ invisible: isOver })} />
    </div>
  );
};

export default TurnPanel;
