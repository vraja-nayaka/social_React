import usersReducer, { SET_USERS } from "./users-reducer";


describe('users reduser', () => {
    it('should handle initial state', () => {
        expect(
            usersReducer(undefined, {})
        ).toEqual(
            {
                users: [],
                pageSize: 10,
                totalUsersCount: 50,
                currentPage: 1,
                isFetching: true,
                followingInProgress: []
            }
        )
    })

})

