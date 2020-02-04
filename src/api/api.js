import * as axios from "axios";

const instanceOld = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "91acd8e8-6680-40db-abbd-f2556d6d7812"
    }
});

const instanceNew = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    headers: {
        "API-KEY": "91acd8e8-6680-40db-abbd-f2556d6d7812"
    }
});

export const usersAPI = {
    getUsers: (currentPage, pageSize) => {
        return instanceOld.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId) {
        return instanceOld.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instanceOld.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanceOld.get(`profile/` + userId)
    },
    getStatus(userId) {
        return instanceOld.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instanceOld.put(`profile/status`, { status: status })
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instanceOld.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instanceOld.put(`profile`, profile );
    }
}

export const authAPI = {
    me() {
        return instanceOld.get(`auth/me`);
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instanceOld.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logout() {
        return instanceOld.delete(`auth/login`);
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instanceOld.get(`security/get-captcha-url`);
    }
}

export const todoAPI = {
    getTodoLists() {
        return instanceNew.get(`todo-lists`)
    },
    postTodoLists(title) {
        return instanceNew.post(`todo-lists`, title)
    },



    // getStatus(userId) {
    //     return instanceNew.get(`todo/status/` + userId)
    // },
    // updateStatus(status) {
    //     return instanceNew.put(`todo/status`, { status: status })
    // },
    // savePhoto(photoFile) {
    //     const formData = new FormData();
    //     formData.append("image", photoFile);
    //     return instanceNew.put(`todo/photo`, formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data'
    //         }
    //     });
    // },
    // saveProfile(profile) {
    //     return instanceNew.put(`todo`, profile );
    // }
}