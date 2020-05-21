import * as axios from 'axios';

const baseURL = 'https://social-network.samuraijs.com/api/1.0/'

const instance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "API-KEY":'48d27174-95eb-4258-826a-c0656d2c3fa8'
    }
})

export const usersAPI = {
    getUsers(currentPage=1, pageSize=5)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
}
export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
            .then(response => response.data);
    },
    login (email, password, rememberMe, captcha=true) {
        let obj = {
            email, password, rememberMe, captcha
        }
        return instance.post(`auth/login/${obj}`)
            .then(response => response.data);
    },
    logout () {
        return instance.delete(`auth/login`)
            .then(response => response.data);
    }
}
