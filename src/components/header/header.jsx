import React from "react";
import style from "./header.module.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth, login, logout }) => {
  let AtLogin = () => {
    return (
      <div>
        {login}
        <button onClick={logout}>logout</button>
      </div>
    );
  };

  return (
    <div className={style.header}>
      <img
        alt="logo"
        src="https://www1.mac360.com/images/uploads/2014/09/20140924-WirelessDisplay.jpg"
      />
      Социальная сеть
      <div className={style.loginBlock}>
        {isAuth ? <AtLogin /> : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
};

export default Header;
