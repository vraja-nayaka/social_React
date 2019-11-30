import { usersAPI, profileAPI } from './../api/api';
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
  profile: null,
  status: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
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

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText });
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