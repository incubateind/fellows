import { call, put, takeLatest } from 'redux-saga/effects';
import { authAPI } from "../Apis";
import { AuthActionTypes } from "../ActionTypes";



function* loginUser(action) {
    try {
        const result = yield call(authAPI.loginApi, action.payload);
        yield put({type:AuthActionTypes.LOGIN_USER_SUCCESS, payload:result.data});
    } catch (e) {
        yield put({type:AuthActionTypes.LOGIN_USER_FAIL, message:e.message});
    }
}
export function* loginSaga() {
    yield takeLatest(AuthActionTypes.LOGIN_USER, loginUser);
}



function* registerUser(action) {
    try {
        const result = yield call(authAPI.registerApi, action.payload);
        console.log(result)
        yield put({type:AuthActionTypes.REGISTER_USER_SUCCESS, payload:result.data});
    } catch (e) {
        yield put({type:AuthActionTypes.REGISTER_USER_FAIL, message:e.message});
    }
}
export function* registerSaga() {
    yield takeLatest(AuthActionTypes.REGISTER_USER, registerUser);
}