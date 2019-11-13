import React from 'react';
import Header from './components/header/header';
import Profile from './components/profile/profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from "react-router-dom";
import NavbarConteiner from './components/navbar/navbar';

const App = () => (<div className="grid">
    <Header />
    <NavbarConteiner />
    <div className="content">
        <Route path='/profile' render={() =>
            <Profile/>}
        />
        <Route path='/dialogs' render={() =>
            <DialogsContainer/>}
        />
    </div>
</div>
)

export default App 
