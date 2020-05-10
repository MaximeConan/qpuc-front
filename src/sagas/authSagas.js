import { put, take, race, takeLatest, fork } from 'redux-saga/effects'

import {
	postSigninSuccess,
	postSigninFailure,
	POST_SIGNIN,
	SIGNOUT,
	signoutFailure,
	signoutSuccess,
	POST_SIGNUP
} from '../actions/authActions'
import { request, REQUEST_SUCCESS, REQUEST_FAILURE } from '../actions/apiActions'
import { resolveApiUrl } from '../utils/apiUtils'
import { STORE_TOKEN_SUCCESS, storeToken } from '../actions/tokenActions'
import { setToStorage, SET_TO_STORAGE_SUCCESS } from '../actions/storageActions'
import { navigateTo } from '../actions/navActions'

export function* watchSigninSaga() {
	yield takeLatest(POST_SIGNIN, singinSaga)
}

export function* singinSaga({ payload }) {
	try {
		const { email, password } = payload

		const url = `${resolveApiUrl(process.env.REACT_APP_SIGNIN)}`

		let formData = new FormData()

		formData.set('username', email)
		formData.set('password', password)

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body: formData
		}

		yield put(request(url, options, 'post_signin'))
		const { success, failure } = yield race({
			success: take(({ type, payload }) => type === REQUEST_SUCCESS && payload.resourceId === 'post_signin'),
			failure: take(({ type, payload }) => type === REQUEST_FAILURE && payload.resourceId === 'post_signin')
		})

		if (failure) {
			console.log('COUCOU')
			throw new Error(failure.payload.error)
		}

		const { payload: { responseBody: { access_token: token } } } = success

		/**** TOKEN STORAGE ****/
		yield put(storeToken(token))
		yield take(STORE_TOKEN_SUCCESS)

		yield put(navigateTo('/question'))

		yield put(postSigninSuccess())
	} catch (err) {
		yield put(postSigninFailure(err))
	}
}

export function* watchSignupSaga() {
	yield takeLatest(POST_SIGNUP, signupSaga)
}

export function* signupSaga({ payload }) {
	try {
		const { email, nickname, password } = payload

		const url = `${resolveApiUrl(process.env.REACT_APP_SIGNUP)}`

		const options = {
			method: 'POST',
			body: {
				email,
				nickname,
				password
			}
		}

		yield put(request(url, options, 'post_signin'))
		const { success, failure } = yield race({
			success: take(({ type, payload }) => type === REQUEST_SUCCESS && payload.resourceId === 'post_signin'),
			failure: take(({ type, payload }) => type === REQUEST_FAILURE && payload.resourceId === 'post_signin')
		})

		if (failure) {
			throw new Error(failure.payload.error)
		}

		const { payload: { responseBody } } = success

		yield put(navigateTo('/connexion'))

		yield put(postSigninSuccess(responseBody))
	} catch (err) {
		yield put(postSigninFailure(err))
	}
}

export function* watchSignout() {
	yield takeLatest(SIGNOUT, signoutSaga)
}

export function* signoutSaga() {
	try {
		yield put(setToStorage('token', 'token', null))
		yield take(SET_TO_STORAGE_SUCCESS)

		yield put(navigateTo('/'))

		yield put(signoutSuccess())
	} catch (err) {
		yield put(signoutFailure(err))
	}
}

export default function* authSagas() {
	yield fork(watchSigninSaga)
	yield fork(watchSignout)
	yield fork(watchSignupSaga)
}
