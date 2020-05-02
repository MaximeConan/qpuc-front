import { put, take, takeLatest, fork } from 'redux-saga/effects'
import decode from 'jwt-decode'

import {
	DESTROY_TOKEN,
	destroyTokenFailure,
	destroyTokenSuccess,
	FETCH_TOKEN,
	fetchTokenFailure,
	fetchTokenSuccess,
	STORE_TOKEN,
	storeTokenFailure,
	storeTokenSuccess,
} from '../actions/tokenActions'
import {
	GET_FROM_STORAGE_SUCCESS,
	getFromStorage,
	SET_TO_STORAGE_SUCCESS,
	setToStorage,
} from '../actions/storageActions'

const KEY = 'token'

export function* watchFetchToken() {
	yield takeLatest(FETCH_TOKEN, fetchTokenSaga)
}

export function* fetchTokenSaga() {
	try {
		yield put(getFromStorage('token', KEY))
		const {
			payload: { resourceData },
		} = yield take(
			({ type, payload: { resourceId } }) => type === GET_FROM_STORAGE_SUCCESS && resourceId === 'token'
		)

		let token = resourceData
		if (token) {
			const { exp } = decode(token)
			if (exp * 1000 < Date.now()) {
				token = null
			}
		}

		yield put(fetchTokenSuccess(token))
	} catch (err) {
		yield put(fetchTokenFailure(err))
	}
}

export function* watchStoreToken() {
	yield takeLatest(STORE_TOKEN, storeTokenSaga)
}

export function* storeTokenSaga({ payload }) {
	try {
		yield put(setToStorage('token', KEY, payload.token))
		yield take(SET_TO_STORAGE_SUCCESS)

		yield put(storeTokenSuccess(payload.token))
	} catch (err) {
		yield put(storeTokenFailure(err))
	}
}

export function* watchDestroyToken() {
	yield takeLatest(DESTROY_TOKEN, destroyTokenSaga)
}

export function* destroyTokenSaga() {
	try {
		yield put(setToStorage('token', KEY, null))
		yield take(SET_TO_STORAGE_SUCCESS)

		yield put(destroyTokenSuccess())
	} catch (err) {
		yield put(destroyTokenFailure(err))
	}
}

export default function* tokenSagas() {
	yield fork(watchFetchToken)
	yield fork(watchStoreToken)
	yield fork(watchDestroyToken)
}
