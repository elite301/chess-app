import React from 'react';
import { render, screen } from '@testing-library/react';
import { GameContextProvider, GameContext } from 'contexts/GameContext/GameContext';
import TurnPanel from 'components/TurnPanel';
import { gameContextIntialValue } from '../../utils/constants';

describe('TurnPanel', () => {
  it('renders the component correctly', () => {
    render(
      <GameContextProvider>
        <TurnPanel />
      </GameContextProvider>,
    );
  });

  it('should have white-turn class at white turn', () => {
    render(
      <GameContext.Provider value={{ ...gameContextIntialValue, turn: 'w' }}>
        <TurnPanel />
      </GameContext.Provider>,
    );
    expect(screen.getByTestId('turn-panel')).toHaveClass('white-turn');
  });

  it("shouldn't have white-turn class at black turn", () => {
    render(
      <GameContext.Provider value={{ ...gameContextIntialValue, turn: 'b' }}>
        <TurnPanel />
      </GameContext.Provider>,
    );
    expect(screen.getByTestId('turn-panel')).not.toHaveClass('white-turn');
  });
});
