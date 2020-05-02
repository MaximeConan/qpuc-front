import { GET_USER, GET_USER_FAILURE, GET_USER_SUCCESS } from '../actions/userActions'

const initialState = {
	isLoading: false,
  error: null,
  data: null
}

const userReducers = (state = initialState, { type, payload }) => {
	if (type.endsWith('FAILURE')) {
		return { ...state, error: payload.error }
	}

	switch (type) {
		case GET_USER:
			return { ...state, isLoading: true }

		case GET_USER_SUCCESS:
      return { ...state, isLoading: false }
      
      case GET_USER_FAILURE:
        return { ...state, isLoading: false }

		default:
			return state
	}
}

export default userReducers

