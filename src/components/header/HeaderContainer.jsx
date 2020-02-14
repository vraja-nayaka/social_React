import React from 'react';
import Header from './header';
import { logout } from '../../redux/auth-reducer';
import { toggleTheme } from '../../redux/app-reducer';
import { connect } from 'react-redux';


const HeaderContainer = (props) => {
           return < Header {...props} />
    }

const mapStateToProps = ({auth}) => ({
    isAuth: auth.isAuth,
    login: auth.login
})

export default connect(mapStateToProps, { logout, toggleTheme })(HeaderContainer)