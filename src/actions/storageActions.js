export const SET_TO_STORAGE = 'SET_TO_STORAGE'
export const SET_TO_STORAGE_SUCCESS = 'SET_TO_STORAGE_SUCCESS'
export const SET_TO_STORAGE_FAILURE = 'SET_TO_STORAGE_FAILURE'

export const GET_FROM_STORAGE = 'GET_FROM_STORAGE'
export const GET_FROM_STORAGE_SUCCESS = 'GET_FROM_STORAGE_SUCCESS'
export const GET_FROM_STORAGE_FAILURE = 'GET_FROM_STORAGE_FAILURE'

export const setToStorage = (resourceId, resourceKey, resourceValue) => ({
	type: SET_TO_STORAGE,
	payload: {
		resourceId,
		resourceKey,
		resourceValue,
	},
})

export const setToStorageSuccess = resourceId => ({
	type: SET_TO_STORAGE_SUCCESS,
	payload: {
		resourceId,
	},
})

export const setToStorageFailure = (resourceId, error) => ({
	type: SET_TO_STORAGE_FAILURE,
	payload: {
		resourceId,
		error,
	},
})

export const getFromStorage = (resourceId, resourceKey) => ({
	type: GET_FROM_STORAGE,
	payload: {
		resourceId,
		resourceKey,
	},
})

export const getFromStorageSuccess = (resourceId, resourceData) => ({
	type: GET_FROM_STORAGE_SUCCESS,
	payload: {
		resourceId,
		resourceData,
	},
})

export const getFromStorageFailure = (resourceId, error) => ({
	type: GET_FROM_STORAGE_FAILURE,
	payload: {
		resourceId,
		error,
	},
})
