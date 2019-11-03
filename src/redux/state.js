let rerenderEntireTree = () => {
    console.log('State changed');
}

let state = {
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Леха" },
            { id: 2, name: "Игорь" },
            { id: 3, name: "Никита" },
            { id: 4, name: "Хари" },
            { id: 5, name: "Василий" }
        ],
        messages: [
            { id: 1, message: "Привет" },
            { id: 2, message: "Хеллоу" },
            { id: 3, message: "Как жизнь?" },
            { id: 4, message: "Нормально!" },
            { id: 5, message: "Ок...." }
        ]
    },
    profilePage: {
        posts: [
            { id: 1, message: 'Всем здорова!', likesCount: 15 },
            { id: 2, message: 'All right!', likesCount: 2 },
            { id: 3, message: 'Happyness', likesCount: 74 },
            { id: 4, message: 'Lets go!', likesCount: 4 },
            { id: 5, message: 'Wow!', likesCount: 1 }
        ],
        newPostText: 'Введите новое сообщение'
    }
}

export let addPost = () => {
    let newPost = {
        id: 6,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree();
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree();
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; 
}
export default state 
