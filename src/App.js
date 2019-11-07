import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import DialogsContainer from './components/dialogs/DialogsContainer';
import { Route } from "react-router-dom";

const App = (props) => (
    <div className="grid">
        <Header />
        <Navbar friends={props.store.getState().DialogsPage} />
        <div className="content">
            <Route path='/profile' render={() =>
                <Profile
                    store={props.store}/>}
            />
            <Route path='/dialogs' render={() =>
                <DialogsContainer
                    store={props.store}/>}
            />
        </div>
    </div>
)

export default App 
