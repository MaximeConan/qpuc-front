import {
	GET_QUESTION,
	GET_QUESTION_FAILURE,
	GET_QUESTION_SUCCESS,
	POST_ANSWER,
	POST_ANSWER_FAILURE,
	POST_ANSWER_SUCCESS,
	CREATE_QUESTION,
	CREATE_QUESTION_SUCCESS,
	CREATE_QUESTION_FAILURE
} from '../actions/questionActions'
import { IDLE, PENDING, SUCCESS } from '../enums/formStatustypes'
import { FAILURE } from '../enums/alertTypes'

const initialState = {
	isLoading: false,
	error: null,
	data: null,
	formStatus: IDLE
}

const questionReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_QUESTION:
		case POST_ANSWER:
		case CREATE_QUESTION:
			return { ...state, isLoading: true, formStatus: PENDING }

		case CREATE_QUESTION_SUCCESS:
			return { ...state, formStatus: SUCCESS }

		case GET_QUESTION_SUCCESS:
			return {
				...state,
				isLoading: false,
				formStatus: SUCCESS,
				data: {
					...state.data,
					question: payload.question,
					questionLength: payload.questionLength,
					id: payload.id
				}
			}

		case POST_ANSWER_SUCCESS:
			return {
				...state,
				isLoading: false,
				formStatus: SUCCESS,
				data: { ...state.data, answer: payload.answer, isCorrectAnswer: payload.isCorrectAnswer }
			}

		case GET_QUESTION_FAILURE:
		case POST_ANSWER_FAILURE:
		case CREATE_QUESTION_FAILURE:
			return { ...state, isLoading: false, formStatus: FAILURE }

		default:
			return state
	}
}

export default questionReducers
