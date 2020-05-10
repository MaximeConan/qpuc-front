import {
	POST_SIGNIN,
	POST_SIGNIN_SUCCESS,
	POST_SIGNIN_FAILURE,
	POST_SIGNUP_FAILURE,
	POST_SIGNUP_SUCCESS,
	POST_SIGNUP
} from '../actions/authActions'
import { IDLE, PENDING, SUCCESS } from '../enums/formStatustypes'
import { FAILURE } from '../enums/alertTypes'

const initialState = {
	isLoading: false,
	error: null,
	formStatus: IDLE
}

const authReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case POST_SIGNIN:
		case POST_SIGNUP:
			return { ...state, isLoading: true, formStatus: PENDING }

		case POST_SIGNIN_SUCCESS:
		case POST_SIGNUP_SUCCESS:
			return {
				...state,
				isLoading: false,
				formStatus: SUCCESS
			}

		case POST_SIGNIN_FAILURE:
		case POST_SIGNUP_FAILURE:
			return { ...state, isLoading: false, formStatus: FAILURE }

		default:
			return state
	}
}

export default authReducers
