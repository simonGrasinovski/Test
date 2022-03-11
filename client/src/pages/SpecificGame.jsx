import React, { useState, useEffect } from 'react';
import  Announcement  from '../components/Announcement';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const SpecificGame = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const [game, setGame] = useState({});
  const [user, setUser] = useState('');

  const getUser = async () => {
    const res = await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/api/users/user",
  });

    setUser(res.data.username);
  };
  getUser();

  useEffect(() => {
    const getGame = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/games/${id}`);
        setGame(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    getGame();
  }, [id]);

  return (
    <>
      <Announcement />
      <Navbar user={user} />
      <div className='specific-game-container'>
        <div className="specific-game-wrapper">
          <div className="specific-game-image-container">
              <img src={game.img} alt="Game" />
          </div>
          <div className="specific-game-info-container">
              <h1 className="specific-game-title">{game.name}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur dolorum ducimus perspiciatis odit esse nesciunt quae sed. Veritatis maxime, accusamus exercitationem ducimus commodi vitae, quas ea ex quis quos laudantium tempora distinctio alias facilis temporibus perferendis soluta doloribus autem voluptas ratione dolores repudiandae a minima optio. Quas rerum laboriosam debitis? Rerum quam est suscipit. Deleniti, numquam necessitatibus tempore, vitae illum ex tenetur mollitia, minus commodi obcaecati velit provident. Dolorem, vero eaque ducimus cupiditate placeat deserunt rerum dolor expedita iure dolorum alias ullam. Voluptatibus beatae ipsam minima esse. Dolore, sit aliquid. Libero, alias. Facere voluptatibus ducimus reiciendis repudiandae esse laudantium?</p>
              <Link style={ user ? { display:'none'} : {display:'initial'}} to='/login'>
                <button className='play-button'>
                  Login to play for real
                </button>
              </Link>
          </div>
        </div>  
      </div>
    </>
  )
}

export default SpecificGame;