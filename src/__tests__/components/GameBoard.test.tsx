import React from 'react';
import { render } from '@testing-library/react';
import { GameContextProvider } from 'contexts/GameContext/GameContext';
import GameBoard from 'components/GameBoard';

describe('GameBoard', () => {
  it('renders the component correctly', () => {
    render(
      <GameContextProvider>
        <GameBoard />
      </GameContextProvider>,
    );
  });
});
