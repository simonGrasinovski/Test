import Game from './Game';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Search } from '@material-ui/icons';

const Games = ({ user }) => {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/games?title=${query}`);
        setGames(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getGames();
  }, [query]);

  return (
    <div>
      <h1 className='main-title'>Best Online Games On PC &amp; Tablet &amp; Mobile.</h1>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" className='search-input' placeholder='Search For Games' 
          onChange={e => setQuery(e.target.value)} />
          <Search style={{ color:"#808080", fontSize: 18 }} />
        </div>
          </div>
      <div className='games-container'>
         {games.map((game) => (
          <Game user={user} game={game} key={game._id} />
      ))}
    </div>
    </div>
  );
}

export default Games;