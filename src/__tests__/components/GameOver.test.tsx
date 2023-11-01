import React from 'react';
import { screen, render } from '@testing-library/react';
import { GameContext, GameContextProvider } from 'contexts/GameContext/GameContext';
import GameOver from 'components/GameOver';
import { gameContextIntialValue } from '../../utils/constants';

describe('GameOver', () => {
  it('renders the component correctly', () => {
    render(
      <GameContextProvider>
        <GameOver />
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

  it("shouldn't show game over modal when game isn't over", () => {
    render(
      <GameContext.Provider value={{ ...gameContextIntialValue, isOver: false }}>
        <GameOver />
      </GameContext.Provider>,
    );

    expect(screen.queryByTestId('game-finished')).toBeNull();
  });
});
