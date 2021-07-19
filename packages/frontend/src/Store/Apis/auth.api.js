import axios from "./axios"


const loginApi = payload => {
    return axios({
        method: 'POST',
        url: '/login',
        data: {
            email: payload.userEmail,
            password: payload.password
        }
    })
}

const registerApi = payload => {
    return axios({
        method: 'POST',
        url: '/register',
        data: payload
    })
}

const authAPI = {
    loginApi,
    registerApi
}


export default authAPI