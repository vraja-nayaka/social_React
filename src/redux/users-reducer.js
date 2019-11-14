const UNFOLLOW = 'UNFOLLOW';
const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    { id: 1, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'Dmitry', status: 'I am a boss', location: { city: 'Moscov', country: 'Russia' } },
    { id: 2, avatarUrl: 'https://pbs.twimg.com/media/Cl5Gor9WMAA8dVI.jpg',
    followed: true, fullName: 'Vadik', status: 'I am a boss too', location: { city: 'Khabarovsk', country: 'Russia' } },
    { id: 3, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'John', status: 'I am a king', location: { city: 'New York', country: 'USA' } },
    { id: 4, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'Rajesh', status: 'I am a yogi', location: { city: 'Vrindavan', country: 'India' } },
    { id: 5, avatarUrl: 'https://pbs.twimg.com/profile_images/893851949849882627/W3MH-3xd_400x400.jpg',
    followed: false, fullName: 'Leha', status: 'Good luck', location: { city: 'Ufa', country: 'Russia' } },
  ]
};

const usersReducer = (state = initialState, action) => {
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
    case SET_USERS:
      return {
        ...state, users: [...state.users, ...action.users]
      };
    default:
      return state;
  }
};

export const followAC = (id) => ({ type: FOLLOW, userId: id });
export const unfollowAC = (id) => ({ type: UNFOLLOW, userId: id });
export const setUsersAC = (users) => ({ type: SET_USERS, users: users });
export default usersReducer