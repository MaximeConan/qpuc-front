export const GET_QUESTION = 'GET_QUESTION'
export const GET_QUESTION_SUCCESS = 'GET_QUESTION_SUCCESS'
export const GET_QUESTION_FAILURE = 'GET_QUESTION_FAILURE'

export const getQuestion = id => ({
  type: GET_QUESTION,
  payload: {
    id
  }
})

export const getQuestionSuccess = (question, questionLenght) => ({
  type: GET_QUESTION_SUCCESS,
  payload: {
    question,
    questionLenght
  }
})

export const getQuestionFailure = err => ({
  type: GET_QUESTION_FAILURE,
  payload: {
    error: err,
    errorToString: err && err.toString()
  }
})