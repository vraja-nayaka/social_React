import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import { Route } from "react-router-dom";

const App = (props) => (
    <div className="grid">
        <Header />
        <Navbar friends={props.DialogsData} />
        <div className="content">
            <Route path='/profile' render={() =>
                <Profile
                    dispatch={props.dispatch}
                    profilePage={props.profilePage} />}
            />
            <Route path='/dialogs' render={() =>
                <Dialogs
                    dispatch={props.dispatch}
                    DialogsData={props.DialogsData}
                    MessagesData={props.MessagesData} />}
            />
        </div>
    </div>
)

export default App 
