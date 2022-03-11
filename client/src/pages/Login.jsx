import React, { useState } from 'react';
import Announcement  from '../components/Announcement';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Login = () => {
    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    const authenticate = async (e) => {
        e.preventDefault();
        const res = await axios({
            method: 'POST',
            data: {
                username: loginUsername,
                password: loginPassword
            },
            withCredentials: true,
            url: 'http://localhost:5000/api/users/login'
        });
        if(res.data.success) {
            window.location.href = '/dashboard';
        }
    }

  return (
      <>
        <Announcement />
        <Navbar />
        <div>
            <div className='d-flex align-items-center justify-content-center register-container'>
                <div className="register-wrapper border border-2 p-5">
                    <h1 className='mb-3'>Sign in</h1>
                    <form onSubmit={authenticate}>
                        <div className="mb-2">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                name="username"
                                type="text" 
                                className="form-control" 
                                id="username" 
                                aria-describedby="username"
                                autoComplete="off"
                                required
                                onChange={e => setLoginUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                name="password"
                                type="password" 
                                className="form-control" 
                                id="password" 
                                aria-describedby="password"
                                required
                                onChange={e => setLoginPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <button className='play-button btn-sm large'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;