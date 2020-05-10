import { STARTUP, STARTUP_SUCCESS } from '../actions/appActions'

const initialState = {
	isReady: false,
	error: null
}

const appReducers = (state = initialState, { type, payload }) => {
	switch (type) {
		case STARTUP:
			return { ...state, isReady: false }

		case STARTUP_SUCCESS:
			return { ...state, isReady: true }

		default:
			return state
	}
}

export default appReducers
