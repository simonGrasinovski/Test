import React, { useState } from 'react';
import Announcement  from '../components/Announcement';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const SpecificUser = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    
    const [username, setUsername] = useState('');

    const [user, setUser] = useState('');

    const getUser = async () => {
        const res = await axios({
            method: "GET",
            withCredentials: true,
            url: `http://localhost:5000/api/users/user/${id}`
        });
        setUser(res.data.username);
    };
    getUser();

    const updateUser = async (e) => {
        e.preventDefault();
        const res = await axios({
            method: 'PUT',
            data: {
                username: username
            },
            url: `http://localhost:5000/api/users/user/${id}`
        });
        if(res.data.success) {
            window.location.href = '/dashboard';
        }
    }

  return (
    <>
        <Announcement />
        <Navbar user={user} />
        <div className='d-flex align-items-center justify-content-center register-container'>
            <div className="register-wrapper border border-2 p-5">
                <h1 className='mb-2'>Update User</h1>
                <form onSubmit={updateUser}>
                    <div className="row mb-4">
                        <div className="col">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text" 
                                className="form-control" 
                                id="username"
                                required
                                autoComplete="off"
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button className='play-button'>Update User</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SpecificUser;