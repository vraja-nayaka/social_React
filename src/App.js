import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import index from './index.css';
import { Route, BrowserRouter } from "react-router-dom";

const App = (props) => (<BrowserRouter>
    <div className={index.grid}>
        <Header />
        <Navbar />
        <Route path='/profile' render={() => <Profile PostsData={props.PostsData} />} />
        <Route path='/dialogs' render={() => <Dialogs DialogsData={props.DialogsData} MessagesData={props.MessagesData} />} />
    </div>
</BrowserRouter>)

export default App 
