import { AuthActionTypes } from '../ActionTypes'


const initState = {}

const authReducer = (state=initState, {type, payload}) => {
    switch(type){
        case AuthActionTypes.LOGIN_USER:
            return state
        case AuthActionTypes.LOGIN_USER_SUCCESS:
            return state
        case AuthActionTypes.LOGIN_USER_FAIL:
            return state

        case AuthActionTypes.REGISTER_USER:
            return state
        case AuthActionTypes.REGISTER_USER_SUCCESS:
            return state
        case AuthActionTypes.REGISTER_USER_FAIL:
            return state

        default:
            return state
    }
}

export default authReducer