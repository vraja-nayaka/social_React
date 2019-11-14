import React from 'react';
import style from './navbar.module.css';
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Friends = (props) => {
    return <div className={style.friendsBar}>
        <a className={style.friends} href="#">Друзья</a>
        <div>
            <Friend friendName={props.friends[0].name} />
            <Friend friendName={props.friends[1].name} />
            <Friend friendName={props.friends[2].name} />
        </div>
    </div>
}

const Friend = (props) => {
    return <div className={style.friendCard}>
        <div>
            <svg height="60" width="60">
                <circle cx="30" cy="30" r="25" stroke="rgb(11, 90, 90)" strokeWidth="1" fill="rgb(165, 201, 204)" />
            </svg>
        </div>
        <a>{props.friendName}</a>
    </div>
}
/*const Navbar = () => {
    return <StoreContext.Consumer>
        { store => {
            return <div className={style.navbar}>
                <div className={style.item}><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></div>
                <div className={style.item}><NavLink to="/dialogs" activeClassName={style.activeLink}>Dialogs</NavLink></div>
                <div className={style.item}><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></div>
                <div className={style.item}><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></div>
                <div className={style.item}><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></div>
                <Friends className={style.friends} friends={store.getState().dialogsPage.dialogs} />
            </div>
        }
        }
    </StoreContext.Consumer>
};
*/
let mapStateToProps = (state) => {
    return {
        friends: state.dialogsPage.dialogs
    }
}

const Navbar = (props) => {
    return <div className={style.navbar}>
        <div className={style.item}><NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink></div>
        <div className={style.item}><NavLink to="/dialogs" activeClassName={style.activeLink}>Dialogs</NavLink></div>
        <div className={style.item}><NavLink to="/news" activeClassName={style.activeLink}>News</NavLink></div>
        <div className={style.item}><NavLink to="/music" activeClassName={style.activeLink}>Music</NavLink></div>
        <div className={style.item}><NavLink to="/settings" activeClassName={style.activeLink}>Settings</NavLink></div>
        <div className={style.item}><NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink></div>
        <Friends className={style.friends} friends={props.friends} />
    </div>
};

const NavbarConteiner = connect(mapStateToProps)(Navbar);
export default NavbarConteiner