import React from 'react';
import { Link } from 'react-router-dom';

const Game = ({ game, user }) => {

  return (
    <div className='game-container'>
        <img src={game.img} alt="Game" />
        <Link to={`/game/${game._id}`}>
          <button className='play-button font-small'>
            {user ? 'Play for Real' : 'Play for Fun'}
          </button>
          <p>{game.name}</p>
        </Link>
    </div>
  );
}

export default Game;