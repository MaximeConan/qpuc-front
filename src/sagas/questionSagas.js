import {  put, take, race, takeLatest, fork } from 'redux-saga/effects'

import { getQuestionSuccess, getQuestionFailure, GET_QUESTION } from '../actions/questionActions'
import { REQUEST_FAILURE, REQUEST_SUCCESS, request } from '../actions/apiActions'
import { resolveApiUrl } from '../utils/apiUtils'

export function* watchGetQuestionSaga() {
	yield takeLatest(GET_QUESTION, getQuestionSaga)
}

export function* getQuestionSaga({ payload }) {
	try {

		const { id  } = payload

    const url = `${resolveApiUrl(process.env.REACT_APP_GET_QUESTION)}/${id}`

		yield put(request(url, null, 'get_question'))
		const { success, failure } = yield race({
			success: take(({ type, payload }) => type === REQUEST_SUCCESS && payload.resourceId === 'get_question'),
			failure: take(({ type, payload }) => type === REQUEST_FAILURE && payload.resourceId === 'get_question'),
		})

		if (failure) {
			throw new Error(failure.payload.error)
		}

		const {
			payload: { responseBody },
    } = success
    
    console.log(responseBody)

    yield put(getQuestionSuccess(responseBody.question, responseBody.question_length))
	} catch (err) {
		yield put(getQuestionFailure(err))
	}
}

export default function* questionSagas() {
	yield fork(watchGetQuestionSaga)
}
