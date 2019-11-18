import React from 'react';
import Header from './components/header/header';
import ProfileContainer from './components/profile/ProfileContainer';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from "react-router-dom";
import NavbarConteiner from './components/navbar/navbar';
import UsersContainer from './components/users/UsersContainer';
import HeaderContainer from './components/header/HeaderContainer';

const App = () => (<div className="grid">
    <HeaderContainer />
    <NavbarConteiner />
    <div className="content">
        <Route path='/profile/:userId?' render={() =>
            <ProfileContainer/>}
        />
        <Route path='/dialogs' render={() =>
            <DialogsContainer/>}
        />
        <Route path='/users' render={() =>
            <UsersContainer/>}
        />
    </div>
</div>
)

export default App 
