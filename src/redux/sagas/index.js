import {all} from 'redux-saga/effects'
import userSaga from './userSagas'
import loginSaga from './loginSagas'

export default function* RootSaga() {
    yield all([
        loginSaga(),
        userSaga(),
    ])
}