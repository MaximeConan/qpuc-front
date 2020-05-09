export const HOLD_NAVIGATION = 'HOLD_NAVIGATION'
export const HOLD_NAVIGATION_SUCCESS = 'HOLD_NAVIGATION_SUCCESS'
export const HOLD_NAVIGATION_FAILURE = 'HOLD_NAVIGATION_FAILURE'

export const NAVIGATE_TO = 'NAVIGATE_TO'
export const NAVIGATE_TO_SUCCESS = 'NAVIGATE_TO_SUCCESS'
export const NAVIGATE_TO_FAILURE = 'NAVIGATE_TO_FAILURE'

export const NAVIGATE_BACK = 'NAVIGATE_BACK'
export const NAVIGATE_BACK_SUCCESS = 'NAVIGATE_BACK_SUCCESS'
export const NAVIGATE_BACK_FAILURE = 'NAVIGATE_BACK_FAILURE'

export const navigateTo = (path) => ({
	type: NAVIGATE_TO,
	payload: {
		path
	}
})

export const navigateToSuccess = (path) => ({
	type: NAVIGATE_TO_SUCCESS,
	payload: {
		path
	}
})

export const navigateToFailure = (path, err) => ({
	type: NAVIGATE_TO_FAILURE,
	payload: {
		path,
		error: err,
		errorString: err && err.toString()
	}
})
