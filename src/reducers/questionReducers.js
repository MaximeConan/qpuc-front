import {
	GET_QUESTION,
	GET_QUESTION_FAILURE,
	GET_QUESTION_SUCCESS,
	POST_ANSWER,
	POST_ANSWER_FAILURE,
	POST_ANSWER_SUCCESS
} from '../actions/questionActions'

const initialState = {
	isLoading: false,
	error: null,
	data: null
}

const questionReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_QUESTION:
		case POST_ANSWER:
			return { ...state, isLoading: true }

		case GET_QUESTION_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: {
					...state.data,
					question: payload.question,
					questionLength: payload.questionLength,
					solution: payload.answer
				}
			}

		case POST_ANSWER_SUCCESS:
			return {
				...state,
				isLoading: false,
				data: { ...state.data, answer: payload.answer, isCorrectAnswer: payload.isCorrectAnswer }
			}

		case GET_QUESTION_FAILURE:
		case POST_ANSWER_FAILURE:
			return { ...state, isLoading: false }

		default:
			return state
	}
}

export default questionReducers
