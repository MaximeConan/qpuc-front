import {call,  put, takeLatest, fork } from 'redux-saga/effects'
import { navigate } from '@reach/router'



import { NAVIGATE_TO, navigateToFailure, navigateToSuccess } from '../actions/navActions'

export function* watchNavigateTo() {
	yield takeLatest(NAVIGATE_TO, navigateToSaga)
}

export function* navigateToSaga({ payload }) {
	const { path } = payload
	try {
		yield call(navigate, path)

		yield put(navigateToSuccess(path))
	} catch (err) {
		yield put(navigateToFailure(path, err))
	}
}

export default function* navSagas() {
	yield fork(watchNavigateTo)
}
