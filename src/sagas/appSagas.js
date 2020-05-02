import {  put, take, takeLatest, fork } from 'redux-saga/effects'

import { startupSuccess, startupFailure, STARTUP , STARTUP_SUCCESS} from '../actions/appActions'
import { fetchToken, FETCH_TOKEN_SUCCESS } from '../actions/tokenActions'

export function* watchStartupSaga() {
	yield takeLatest(STARTUP, startupSaga)
}

export function* startupSaga() {
	try {

		yield put(fetchToken())
		yield take(FETCH_TOKEN_SUCCESS)

		yield put(startupSuccess())
		yield take(STARTUP_SUCCESS)
	} catch (err) {
		yield put(startupFailure(err))
	}
}

export default function* appSagas() {
	yield fork(watchStartupSaga)
}
