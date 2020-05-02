export const FETCH_TOKEN = 'FETCH_TOKEN'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE'

export const STORE_TOKEN = 'STORE_TOKEN'
export const STORE_TOKEN_SUCCESS = 'STORE_TOKEN_SUCCESS'
export const STORE_TOKEN_FAILURE = 'STORE_TOKEN_FAILURE'

export const DESTROY_TOKEN = 'DESTROY_TOKEN'
export const DESTROY_TOKEN_SUCCESS = 'DESTROY_TOKEN_SUCCESS'
export const DESTROY_TOKEN_FAILURE = 'DESTROY_TOKEN_FAILURE'

export const fetchToken = () => ({
	type: FETCH_TOKEN,
})

export const fetchTokenSuccess = token => ({
	type: FETCH_TOKEN_SUCCESS,
	payload: {
		token,
	},
})

export const fetchTokenFailure = error => ({
	type: FETCH_TOKEN_FAILURE,
	payload: {
		error,
	},
})

export const storeToken = token => ({
	type: STORE_TOKEN,
	payload: {
		token,
	},
})

export const storeTokenSuccess = token => ({
	type: STORE_TOKEN_SUCCESS,
	payload: {
		token,
	},
})

export const storeTokenFailure = error => ({
	type: STORE_TOKEN_FAILURE,
	payload: {
		error,
	},
})

export const destroyToken = () => ({
	type: DESTROY_TOKEN,
})

export const destroyTokenSuccess = () => ({
	type: DESTROY_TOKEN_SUCCESS,
})

export const destroyTokenFailure = err => ({
	type: DESTROY_TOKEN_FAILURE,
	payload: {
		error: err && err.toString(),
	},
})
