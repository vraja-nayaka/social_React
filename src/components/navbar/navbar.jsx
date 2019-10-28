import React from 'react';
import navbar from './navbar.module.css';

const Navbar = () => {
    return <div className="navbar">
        <div><a>Profile</a></div>
        <div><a>Masseges</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a> </div>
    </div>
};

export default Navbar