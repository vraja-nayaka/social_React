import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from "react-router-dom";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                profilePage={state.profilePage}
                DialogsData={state.dialogsPage.dialogs}
                MessagesData={state.dialogsPage.messages} />
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree()

subscribe(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();