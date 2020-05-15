const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
    UsersData: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
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
                UsersData: action.UsersData,
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage,
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
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
export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
})
export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount,
})


export default UsersReducer;