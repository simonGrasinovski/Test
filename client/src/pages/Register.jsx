import React, { useState } from 'react';
import Announcement  from '../components/Announcement';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const register = async (e) => {
        e.preventDefault();
        const res = await axios({
            method: 'POST',
            data: {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            },
            withCredentials: true,
            url: 'http://localhost:5000/api/users/register'
        });
        if(res.data.success) {
            window.location.href = '/login';
        }
    }

  return (
    <>
        <Announcement />
        <Navbar />
        <div className='d-flex align-items-center justify-content-center register-container'>
            <div className="register-wrapper border border-2 p-5">
                <h1 className='mb-3'>Create an account</h1>
                <form onSubmit={register}>
                    <div className="row mb-2">
                        <div className="col">
                            <label htmlFor="first-name" className="form-label">First Name</label>
                            <input
                                type="text" 
                                className="form-control" 
                                id="first-name"
                                required
                                autoComplete="off"
                                onChange={e => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="last-name" className="form-label">Last Name</label>
                            <input
                                type="text" 
                                className="form-control" 
                                id="last-name"
                                required
                                autoComplete="off"
                                onChange={e => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-2">
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
                        <div className="col">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email" 
                                className="form-control" 
                                id="email"
                                required
                                autoComplete="off"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="col">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password" 
                                className="form-control" 
                                id="password"
                                required
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="col">
                            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                            <input
                                type="password" 
                                className="form-control" 
                                id="confirm-password"
                                required
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <p className="mt-5">
                        By creating an account. You agree to our terms and conditions and our privacy policy.
                    </p>
                    <div>
                        <button className='play-button'>Create an account</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
}

export default Register;