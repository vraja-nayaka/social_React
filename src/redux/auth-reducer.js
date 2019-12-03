import { authAPI } from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};


const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => (
  { type: SET_USER_DATA, payload: { userId, email, login, isAuth } }
);

export const getAuthUserData = () => (dispatch) => {
  return authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
}

export const login = ({ email, password, rememberMe, captcha }) => (dispatch) => {
   authAPI.login(email, password, rememberMe, captcha)
    .then(response => {
      if (response.data.resultCode === 0) {
        let { userId } = response.data;
        dispatch(getAuthUserData(userId));
      } else {
        let message = response.data.messeges.length > 0 ? response.data.messeges[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
      }
    })
}

export const logout = () => (dispatch) => {
  authAPI.logout()
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    })
}

export default authReducer