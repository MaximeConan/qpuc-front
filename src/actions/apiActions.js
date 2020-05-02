export const REQUEST = 'api/request'
export const REQUEST_SUCCESS = 'api/requestSuccess'
export const REQUEST_FAILURE = 'api/requestFailure'

export const request = (requestUrl, requestOptions = null, resourceId = null) => ({
	type: REQUEST,
	payload: {
		requestUrl,
		requestOptions,
		resourceId,
	},
})

export const requestSuccess = (responseBody, responseStatus, responseHeaders, resourceId = null) => ({
	type: REQUEST_SUCCESS,
	payload: {
		responseBody,
		responseStatus,
		responseHeaders,
		resourceId,
	},
})

export const requestFailure = (err, resourceId = null) => ({
	type: REQUEST_FAILURE,
	payload: {
		error: err,
		errorString: err && err.toString(),
		resourceId,
	},
})
