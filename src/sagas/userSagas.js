import {  put, takeLatest, fork } from 'redux-saga/effects'

import { getUserSuccess, getUserFailure, GET_USER } from '../actions/userActions'

export function* watchGetUserSaga() {
	yield takeLatest(GET_USER, getUserSaga)
}

export function* getUserSaga() {
	try {
    yield put(getUserSuccess())
	} catch (err) {
		yield put(getUserFailure(err))
	}
}

export default function* userSagas() {
	yield fork(watchGetUserSaga)
}
