export const GET_QUESTION = 'GET_QUESTION'
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS'
export const GET_QUESTION_FAILURE = 'GET_QUESTION_FAILURE'

export const CREATE_QUESTION = 'CREATE_QUESTION'
export const CREATE_QUESTION_SUCCESS = 'CREATE_QUESTION_SUCCESS'
export const CREATE_QUESTION_FAILURE = 'CREATE_QUESTION_FAILURE'

export const POST_ANSWER = 'POST_ANSWER'
export const POST_ANSWER_SUCCESS = 'POST_ANSWER_SUCCESS'
export const POST_ANSWER_FAILURE = 'GET_ANSWER_FAILURE'

export const getQuestion = (id) => ({
	type: GET_QUESTION,
	payload: {
		id
	}
})

export const getQuestionSuccess = (question, questionLength) => ({
	type: GET_QUESTION_SUCCESS,
	payload: {
		question,
		questionLength
	}
})

export const getQuestionFailure = (err) => ({
	type: GET_QUESTION_FAILURE,
	payload: {
		error: err,
		errorToString: err && err.toString()
	}
})

export const createQuestion = (steps, answers) => ({
	type: CREATE_QUESTION,
	payload: {
		steps,
		answers
	}
})

export const createQuestionSuccess = () => ({
	type: CREATE_QUESTION_SUCCESS
})

export const createQuestionFailure = (err) => ({
	type: CREATE_QUESTION_FAILURE,
	payload: {
		error: err,
		errorToString: err && err.toString()
	}
})

export const postAnswer = (id, answer, timeToAnswer) => ({
	type: POST_ANSWER,
	payload: {
		id,
		answer,
		timeToAnswer
	}
})

export const postAnswerSuccess = (answer, isCorrectAnswer) => ({
	type: POST_ANSWER_SUCCESS,
	payload: {
		answer,
		isCorrectAnswer
	}
})

export const postAnswerFailure = (err) => ({
	type: POST_ANSWER_FAILURE,
	payload: {
		error: err,
		errorToString: err && err.toString()
	}
})
