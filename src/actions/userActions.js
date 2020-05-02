export const GET_USER = 'GET_USER'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const GET_USER_FAILURE = 'GET_USER_FAILURE'

export const getUser = () => ({
  type: GET_USER,
  payload: {}
})

export const getUserSuccess = () => ({
  type: GET_USER_SUCCESS,
  payload: {}
})

export const getUserFailure = (err) => ({
  type: GET_USER_FAILURE,
  payload: {
    error: err,
    errorToString: err && err.toString()
  }
})