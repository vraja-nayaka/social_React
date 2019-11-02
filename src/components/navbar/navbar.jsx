import React from 'react';
import style from './navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <div className="navbar">
        <div><NavLink to="/profile" activeClassName={style.active}>Profile</NavLink></div>
        <div><NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink></div>
        <div><NavLink to="/news" activeClassName={style.active}>News</NavLink></div>
        <div><NavLink to="/music" activeClassName={style.active}>Music</NavLink></div>
        <div><NavLink to="/settings" activeClassName={style.active}>Settings</NavLink></div>
    </div>
};

export default Navbar