import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const TOGGLE_THEME = "TOGGLE_THEME";

let initialState = {
  initialized: false,
  isDarkTheme: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      };
    case TOGGLE_THEME:
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      };
    default:
      return state;
  }
};


export const toggleTheme = () => ({ type: TOGGLE_THEME });
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => dispatch => {
  let promise = dispatch(getAuthUserData());
  //dispatch(somethingelse());
  //dispatch(somethingelse());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
