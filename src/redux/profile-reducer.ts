import { profileAPI } from './../api/api';
import { stopSubmit } from "redux-form";
import { PhotosType, ProfileType, PostType } from '../types';

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

export type InitialStateType = typeof initialState

let initialState = {
  posts: [
    { id: 1, author: 'Joe Gamble', message: 'Всем здорова!', likesCount: 15 },
    { id: 2, author: 'Tiny Bro', message: 'All right!', likesCount: 2 },
    { id: 3, author: 'Salsa Mc Try', message: 'Happyness', likesCount: 74 },
    { id: 4, author: 'Sindy Taylor', message: 'Lets go!', likesCount: 4 },
    { id: 5, author: 'Joe Gamble', message: 'Wow!', likesCount: 1 }
  ] as Array<PostType>,
  profile: null as ProfileType | null,
  status: '',
  newPostText: ''
};



const profileReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 6,
        author: "It is your new post",
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
    case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) }
    case SAVE_PHOTO_SUCCESS:
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
    default:
      return state;
  }
};

type AddPostActionType = {
  type: typeof ADD_POST
  newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({ type: ADD_POST, newPostText });

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE
  profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });

type SetStatusActionType = {
  type: typeof SET_STATUS
  status: string
}
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });

type DeletePostActionType = {
  type: typeof DELETE_POST
  postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({ type: DELETE_POST, postId })

type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS
  photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({ type: SAVE_PHOTO_SUCCESS, photos })


export const getUserProfile = (userId: number) => async (dispath: any) => {
  const response = await profileAPI.getProfile(userId);
  dispath(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispath: any) => {
  const response = await profileAPI.getStatus(userId);
  dispath(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispath: any) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispath(setStatus(status))
  }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
  const response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
  const response = await profileAPI.saveProfile(profile);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(stopSubmit("edit-profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
}

export default profileReducer