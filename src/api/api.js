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
    authMe () {
        return instance.get(`auth/me`)
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
   getProfile (userId) {
        return instance.get(`profile/${userId}`)
   },
}


