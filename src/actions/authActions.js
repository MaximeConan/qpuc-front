export const POST_SIGNIN = 'POST_SIGNIN'
export const POST_SIGNIN_SUCCESS = 'POST_SIGNIN_SUCCESS'
export const POST_SIGNIN_FAILURE = 'POST_SIGNIN_FAILURE'

export const POST_SIGNUP = 'POST_SIGNUP'
export const POST_SIGNUP_SUCCESS = 'POST_SIGNUP_SUCCESS'
export const POST_SIGNUP_FAILURE = 'POST_SIGNUP_FAILURE'

export const SIGNOUT = 'SIGNOUT'
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS'
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE'

export const postSignin = (email, password) => ({
	type: POST_SIGNIN,
	payload: {
		email,
		password
	}
})

export const postSigninSuccess = () => ({
	type: POST_SIGNIN_SUCCESS
})

export const postSigninFailure = (err) => ({
	type: POST_SIGNIN_FAILURE,
	paylod: {
		error: err,
		errorString: err && err.toString()
	}
})

export const postSignup = (email, nickname, password) => ({
	type: POST_SIGNUP,
	payload: {
		email,
		nickname,
		password
	}
})

export const postSignupSuccess = (user) => ({
	type: POST_SIGNUP_SUCCESS,
	payload: { user }
})

export const postSignupFailure = (err) => ({
	type: POST_SIGNUP_FAILURE,
	paylod: {
		error: err,
		errorString: err && err.toString()
	}
})

export const signout = () => ({ type: SIGNOUT })
export const signoutSuccess = () => ({ type: SIGNOUT_SUCCESS })
export const signoutFailure = (err) => ({
	type: SIGNOUT_FAILURE,
	payload: { error: err, errorString: err && err.toString() }
})
