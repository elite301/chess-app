import React from 'react';
import GameBoard from 'components/GameBoard';
import GameOver from 'components/GameOver';

const Home = () => {
  return (
    <div
      className='d-flex justify-content-center align-items-center vw-100 vh-100'
      style={{ backgroundColor: 'antiquewhite' }}
    >
      <GameBoard />
      <GameOver />
    </div>
  );
};

export default Home;
