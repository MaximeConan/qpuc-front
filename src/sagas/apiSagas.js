import { call, take, fork, put, takeEvery } from 'redux-saga/effects'

import { REQUEST, requestFailure, requestSuccess } from '../actions/apiActions'
import { fetchToken, FETCH_TOKEN_SUCCESS } from '../actions/tokenActions'

import { requestService } from '../services/apiServices'

export function* watchRequest() {
	yield takeEvery(REQUEST, requestSaga)
}

export function* requestSaga({ payload }) {
	const { resourceId } = payload
	try {
		yield put(fetchToken())
		const {
			payload: { token },
		} = yield take(FETCH_TOKEN_SUCCESS)
		let { requestUrl, requestOptions } = payload

		requestOptions = token
			? { ...requestOptions, headers: { ...requestOptions.headers, Authorization: `Bearer ${token}` } }
			: requestOptions

		const { body, status, headers } = yield call(requestService, requestUrl, requestOptions)

		yield put(requestSuccess(body, status, headers, resourceId))
	} catch (err) {
		yield put(requestFailure(err, resourceId))
	}
}

export default function* apiSagas() {
	yield fork(watchRequest)
}
