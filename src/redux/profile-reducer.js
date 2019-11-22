import { usersAPI, profileAPI } from './../api/api';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Всем здорова!', likesCount: 15 },
    { id: 2, message: 'All right!', likesCount: 2 },
    { id: 3, message: 'Happyness', likesCount: 74 },
    { id: 4, message: 'Lets go!', likesCount: 4 },
    { id: 5, message: 'Wow!', likesCount: 1 }
  ],
  newPostText: 'Введите новое сообщение',
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: state.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispath) => {
  usersAPI.getProfile(userId).then(response => {
    dispath(setUserProfile(response.data))
})
}
export const getStatus = (userId) => (dispath) => {
  profileAPI.getStatus(userId)
  .then(response => {
    dispath(setStatus(response.data))
})
}
export const updateStatus = (status) => (dispath) => {
  profileAPI.updateStatus(status)
  .then(response => {
    if (response.data.resultCode === 0) {
    dispath(setStatus(status))
}})
}

export default profileReducer