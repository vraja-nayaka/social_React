import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
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
            ],
            newMessageBody: ""
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    /* Ниже старые функции 9теперь созданы экшн криейтеры и диспатч
     addPost() {
  
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }, */
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
}
/* новый диспатч!!!*/
/*
  */





export default store
window.store = store
