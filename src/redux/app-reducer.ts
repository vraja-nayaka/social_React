import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";
const TOGGLE_THEME = "TOGGLE_THEME";

export type InitialStateType = {
  initialized: boolean,
  isDarkTheme: boolean
};

let initialState: InitialStateType = {
  initialized: false,
  isDarkTheme: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {
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

type ToggleThemeActionType = {
  type: typeof TOGGLE_THEME
}
type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const toggleTheme = (): ToggleThemeActionType => ({ type: TOGGLE_THEME });
export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(initializedSuccess());
  });
};

export default appReducer;
