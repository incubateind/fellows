import { AuthActionTypes } from '../ActionTypes'



export const loginUser = data => {
    return {
        type: AuthActionTypes.LOGIN_USER,
        payload: data
    }
}



export const registerUser = data => {
    return {
        type: AuthActionTypes.REGISTER_USER,
        payload: data
    }
}