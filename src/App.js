import React from 'react';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Dialogs from './components/dialogs/dialogs';
import index from './index.css';

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

const App = () => (<div className={index.grid}>
    <Header />
    <Navbar />
    <Profile PostsData={ PostsData }/>
    <Dialogs DialogsData={ DialogsData } MessagesData={MessagesData}/>
    <a>helloWorld</a>
</div>)

export default App 
