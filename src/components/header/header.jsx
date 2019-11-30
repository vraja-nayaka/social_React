import React from 'react';
import style from './header.module.css';
import { NavLink } from 'react-router-dom';
import { logout } from '../../redux/auth-reducer';

const Header = (props) => {

    let AtLogin = () => {
        return <div>{props.login}
            <button onClick={logout()}>logout</button>
        </div>
    }

    return <div className={style.header}>
        <img src="https://www1.mac360.com/images/uploads/2014/09/20140924-WirelessDisplay.jpg" /> Социальная сеть
   <div className={style.loginBlock}>
            {props.isAuth ? <AtLogin {...props}/>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>

    </div>
};

export default Header