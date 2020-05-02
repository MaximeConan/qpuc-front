import { GET_QUESTION, GET_QUESTION_FAILURE, GET_QUESTION_SUCCESS } from '../actions/questionActions'

const initialState = {
	isLoading: false,
  error: null,
  data: null
}

const questionReducers = (state = initialState, { type, payload }) => {
	if (type.endsWith('FAILURE')) {
		return { ...state, error: payload.error }
	}

	switch (type) {
		case GET_QUESTION:
			return { ...state, isLoading: true }

		case GET_QUESTION_SUCCESS:
      return { ...state, isLoading: false, data: {question: payload.question, questionLenght: payload.questionLenght }}
      
      case GET_QUESTION_FAILURE:
        return { ...state, isLoading: false }

		default:
			return state
	}
}

export default questionReducers

