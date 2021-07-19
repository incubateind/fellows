import {all } from 'redux-saga/effects';
import { loginSaga, registerSaga } from "./auth.saga";


export default function* rootSaga() {
    yield all([
        loginSaga(),
        registerSaga()
    ]);
}
