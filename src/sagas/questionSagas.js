import { put, take, race, takeLatest, fork } from 'redux-saga/effects'
import { omit } from 'lodash'
import {
	getQuestionSuccess,
	getQuestionFailure,
	GET_QUESTION,
	POST_ANSWER,
	postAnswerSuccess,
	postAnswerFailure,
	CREATE_QUESTION,
	createQuestionSuccess,
	createQuestionFailure
} from '../actions/questionActions'
import { REQUEST_FAILURE, REQUEST_SUCCESS, request } from '../actions/apiActions'
import { resolveApiUrl } from '../utils/apiUtils'

export function* watchGetQuestionSaga() {
	yield takeLatest(GET_QUESTION, getQuestionSaga)
}

export function* getQuestionSaga({ payload }) {
	try {
		const { id } = payload

		const url = `${resolveApiUrl(process.env.REACT_APP_GET_QUESTION)}`

		const options = {
			query: {
				user_id: id
			}
		}

		yield put(request(url, options, 'get_question'))
		const { success, failure } = yield race({
			success: take(({ type, payload }) => type === REQUEST_SUCCESS && payload.resourceId === 'get_question'),
			failure: take(({ type, payload }) => type === REQUEST_FAILURE && payload.resourceId === 'get_question')
		})

		if (failure) {
			throw new Error(failure.payload.error)
		}

		const { payload: { responseBody } } = success

		yield put(getQuestionSuccess(responseBody.steps, responseBody.question_length, responseBody.answers[0].answer))
	} catch (err) {
		yield put(getQuestionFailure(err))
	}
}

export function* watchCreateQuestionSaga() {
	yield takeLatest(CREATE_QUESTION, createQuestionSaga)
}

export function* createQuestionSaga({ payload }) {
	try {
		const { steps, answers } = payload

		const url = `${resolveApiUrl(process.env.REACT_APP_CREATE_QUESTION)}`

		const options = {
			method: 'POST',
			query: {
				user_id: '1'
			},
			body: {
				steps,
				answers
			}
		}

		yield put(request(url, options, 'create_question'))
		const { failure } = yield race({
			success: take(({ type, payload }) => type === REQUEST_SUCCESS && payload.resourceId === 'create_question'),
			failure: take(({ type, payload }) => type === REQUEST_FAILURE && payload.resourceId === 'create_question')
		})

		if (failure) {
			throw new Error(failure.payload.error)
		}

		yield put(createQuestionSuccess())
	} catch (err) {
		yield put(createQuestionFailure(err))
	}
}

export function* watchPostAnswerSaga() {
	yield takeLatest(POST_ANSWER, postAnswerSaga)
}

export function* postAnswerSaga({ payload }) {
	try {
		const { id, answer, timeToAnswer } = payload

		console.log('PAYLOAD', payload)

		const url = `${resolveApiUrl(process.env.REACT_APP_POST_ANSWER)}/${id}`

		const options = {
			method: 'POST',
			query: {
				user_id: 1
			},
			body: {
				time_answer: `${timeToAnswer.hours}:${timeToAnswer.minutes}:${timeToAnswer.seconds}`,
				guessed_answer: answer
			}
		}

		yield put(request(url, options, 'post_answer'))
		const { success, failure } = yield race({
			success: take(({ type, payload }) => type === REQUEST_SUCCESS && payload.resourceId === 'post_answer'),
			failure: take(({ type, payload }) => type === REQUEST_FAILURE && payload.resourceId === 'post_answer')
		})

		if (failure) {
			throw new Error(failure.payload.error)
		}

		const { payload: { responseBody } } = success

		yield put(postAnswerSuccess(responseBody.guessed_answer, responseBody.is_correct))
	} catch (err) {
		yield put(postAnswerFailure(err))
	}
}

export default function* questionSagas() {
	yield fork(watchGetQuestionSaga)
	yield fork(watchCreateQuestionSaga)
	yield fork(watchPostAnswerSaga)
}
