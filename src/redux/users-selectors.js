import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.UsersPage.UsersData
}
export const getUsersData = createSelector(getUsersSelector,(users)=> {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.UsersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.UsersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.UsersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.UsersPage.isFetching
}
export const getIsFollowingInProgress = (state) => {
    return state.UsersPage.isFollowingInProgress
}
export const getPortionSize = (state) => {
    return state.UsersPage.portionSize
}
