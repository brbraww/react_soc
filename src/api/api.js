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
    },
    follow (userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`)
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
    savePhoto(photoFile) {
        var formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(
                `profile/photo`,
                formData,
                {headers:{'Content-Type': 'multipart/form-data'}}
            )
    },
    saveUserInfo(userInfo) {
        return instance.put(`profile`, userInfo)

    },
}
export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
    },
    login (email, password, rememberMe=false, captcha=null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}
export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}
