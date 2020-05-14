const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS;'
let initialState = {
    UsersData: [
        ]
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                UsersData: [...state.UsersData].map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                UsersData: [...state.UsersData].map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        }
        case SET_USERS: {
            return {
                ...state,
                UsersData: [...state.UsersData, ...action.UsersData],
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId: userId,
})
export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId: userId,
})
export const setUsersAC = (users) => ({
    type: SET_USERS,
    UsersData: users,
})


export default UsersReducer;