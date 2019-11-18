import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <div className={style.header}>
        <img src="https://www1.mac360.com/images/uploads/2014/09/20140924-WirelessDisplay.jpg" /> Социальная сеть
   <div className={style.loginBlock}>
            {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>

    </div>
};

export default Header