const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

let initialState = {
            posts: [
                { id: 1, message: 'Всем здорова!', likesCount: 15 },
                { id: 2, message: 'All right!', likesCount: 2 },
                { id: 3, message: 'Happyness', likesCount: 74 },
                { id: 4, message: 'Lets go!', likesCount: 4 },
                { id: 5, message: 'Wow!', likesCount: 1 }
            ],
            newPostText: 'Введите новое сообщение'
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = '';
       return state;
    case UPDATE_NEW_POST_TEXT:
  state.newPostText = action.newText;
    return state;
    default:
      return state;
        }
};

export const addPostAC = () => ({ type: ADD_POST });
export const updateNewPostTextAC = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export default profileReducer