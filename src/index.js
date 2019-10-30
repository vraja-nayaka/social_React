import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let DialogsData = [
    {id: 1, name: "Леха"},
    {id: 2, name: "Игорь"},
    {id: 3, name: "Никита"},
    {id: 4, name: "Хари"},
    {id: 5, name: "Василий"}
    ]
let MessagesData = [
    {id: 1, message: "Привет"},
    {id: 2, message: "Хеллоу"},
    {id: 3, message: "Как жизнь?"},
    {id: 4, message: "Нормально!"},
    {id: 5, message: "Ок...."}
    ]

let PostsData = [
{id: 1, post: 'Всем здорова!', likesCount: 15},
{id: 2, post: 'All right!', likesCount: 2},
{id: 3, post: 'Happyness', likesCount: 74},
{id: 4, post: 'Lets go!', likesCount: 4},
{id: 5, post: 'Wow!', likesCount: 1}
]

ReactDOM.render(<App PostsData={PostsData} DialogsData={DialogsData} MessagesData={MessagesData}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();