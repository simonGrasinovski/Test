import React, { useState } from 'react';
import Announcement  from '../components/Announcement';
import Games from '../components/Games';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Home = () => {
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState('');

  const getUser = async () => {
    const res = await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/api/users/user",
  });

    setUserId(res.data._id);
    setUser(res.data.username);
  };
  getUser();

  return (
    <div>
        <Announcement />
        <Navbar user={user} userId={userId} />
        <Games user={user} />
    </div>
  )
}

export default Home;