import React from 'react';
import { render, screen } from '@testing-library/react';
import { GameContext, GameContextProvider } from 'contexts/GameContext/GameContext';
import Home from 'pages/Home';
import GameOver from 'components/GameOver';
import { gameContextIntialValue } from 'utils/constants';

describe('Home', () => {
  it('renders the component correctly', () => {
    render(
      <GameContextProvider>
        <Home />
      </GameContextProvider>,
    );
  });

  it('should show game over modal when game is over', () => {
    render(
      <GameContext.Provider value={{ ...gameContextIntialValue, isOver: true }}>
        <GameOver />
      </GameContext.Provider>,
    );

    expect(screen.getByTestId('game-finished')).toBeInTheDocument();
  });
});
