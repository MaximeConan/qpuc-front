import { call, put, takeEvery, fork } from 'redux-saga/effects'

import {
	GET_FROM_STORAGE,
	getFromStorageFailure,
	getFromStorageSuccess,
	SET_TO_STORAGE,
	setToStorageFailure,
	setToStorageSuccess,
} from '../actions/storageActions'

import { getFromStorageService, setToStorageService } from '../services/storageServices'

export function* watchGetFromStorage() {
	yield takeEvery(GET_FROM_STORAGE, getFromStorageSaga)
}

export function* getFromStorageSaga({ payload }) {
	const { resourceId } = payload
	try {
		const { resourceKey } = payload

		const resourceData = yield call(getFromStorageService, resourceKey)

		yield put(getFromStorageSuccess(resourceId, resourceData))
	} catch (err) {
		yield put(getFromStorageFailure(resourceId, err))
	}
}

export function* watchSetToStorage() {
	yield takeEvery(SET_TO_STORAGE, setToStorageSaga)
}

export function* setToStorageSaga({ payload }) {
	const { resourceId } = payload
	try {
		const { resourceKey, resourceValue } = payload

		yield call(setToStorageService, resourceKey, resourceValue)

		yield put(setToStorageSuccess(resourceId))
	} catch (err) {
		yield put(setToStorageFailure(resourceId, err))
	}
}

export default function* storageSagas() {
	yield fork(watchGetFromStorage)
	yield fork(watchSetToStorage)
}
