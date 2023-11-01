import React from 'react';
import Home from 'pages/Home';
import { GameContextProvider } from 'contexts/GameContext/GameContext';

function App() {
  return (
    <GameContextProvider>
      <Home />
    </GameContextProvider>
  );
}

export default App;
