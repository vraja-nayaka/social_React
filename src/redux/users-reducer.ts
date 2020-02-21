import { usersAPI } from './../api/api';
import { UserType } from '../types';

const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETHING = 'TOGGLE_IS_FETHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


type InitialStateType = typeof initialState
export const initialState = {
  users: [] as Array<UserType>,
  pageSize: 10 as number,
  totalUsersCount: 50 as number,
  currentPage: 1 as number,
  isFetching: true as boolean,
  followingInProgress: [] as Array<number>
};

const usersReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u
        }
        )
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u
        }
        )
      };
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case TOGGLE_IS_FETHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id != action.userId)
      }
    }
    default:
      return state;
  }
};

type FollowSuccessActionType = {
  type: typeof FOLLOW
  userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {
  type: typeof UNFOLLOW
  userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {
  type: typeof SET_USERS
  users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
  type: typeof SET_CURRENT_PAGE
  currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage });

type SetTotalUsersCountActionType = {
  type: typeof SET_TOTAL_USERS_COUNT
  totalUsersCount: number
}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETHING
  isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({ type: TOGGLE_IS_FETHING, isFetching });

type ToggleFollowingInProgressActionType = {
  type: typeof TOGGLE_FOLLOWING_PROGRESS
  isFetching: boolean
  userId: number
}
export const toggleFollowingInProgress = (isFetching: boolean, userId: number): ToggleFollowingInProgressActionType => ({ type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId });

export const requestUsers = (page: number, pageSize: number) => {
  return (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(page, pageSize).then((data: any) => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(setCurrentPage(page));
    });
  }
};

export const follow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.follow(userId).then((response: any) => {
      if (response.data.resultCode === 0) { dispatch(followSuccess(userId)) }
      dispatch(toggleFollowingInProgress(false, userId));
    })
  }
}

export const unfollow = (userId: number) => {
  return (dispatch: any) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.unfollow(userId).then((response: any) => {
      if (response.data.resultCode === 0) { dispatch(unfollowSuccess(userId)) }
      dispatch(toggleFollowingInProgress(false, userId));
    })
  }
}

export default usersReducer;