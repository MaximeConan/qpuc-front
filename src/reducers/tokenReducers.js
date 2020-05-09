import { FETCH_TOKEN_SUCCESS, DESTROY_TOKEN_SUCCESS, STORE_TOKEN_SUCCESS } from '../actions/tokenActions'
import { SIGNOUT } from '../actions/authActions'

const initialState = null

const tokenReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_TOKEN_SUCCESS:
		case STORE_TOKEN_SUCCESS:
			return payload.token

		case DESTROY_TOKEN_SUCCESS:
			return null

		case SIGNOUT:
			return null

		default:
			return state
	}
}

export default tokenReducers
