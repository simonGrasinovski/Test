import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Navbar = ({ user, userId }) => {

    const changeStatus = async () => {
        if(user) {
            await axios.delete('http://localhost:5000/api/users/logout');
        }
    }

  return (
    <div className='navbar-container'>
        <div className="navbar-wrapper">
            <div className="navbar-left">
                <Link to='/'>
                    <h1 className='logo'>
                        FrontEnd Test
                    </h1>
                </Link>
            </div>
            <div className="navbar-right">
                <div className="menu-item">
                    <Link  to={`/user/${userId}`}>
                        {user}
                    </Link>
                    
                </div>
                <div className="menu-item">
                    <Link style={ user ? { display:'none'} : {display: 'initial'}} to='/register'>
                        REGISTER
                    </Link> 
                </div>
                <div className="menu-item">
                    <Link to='/login' onClick={changeStatus}>
                        {user ? 'LOGOUT' : 'LOGIN'}
                    </Link>    
                </div>  
            </div>
        </div>
    </div>
  )
}

export default Navbar;