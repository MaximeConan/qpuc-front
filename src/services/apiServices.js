import axios from 'axios'
import { inRange } from 'lodash'

export const requestService = async (url, options = null) => {
	try {
		options = options || {
			method: 'GET',
			query: null,
			body: null,
			headers: {}
		}

		const response = await axios(url, {
			method: options.method,
			headers: options.headers,
			data: options.body,
			params: options.query,
			...options
		})

		if (inRange(response.status, 199, 300)) {
			return {
				body: response.data,
				status: response.status,
				headers: response.headers
			}
		} else {
			throw new Error(response.statusText)
		}
	} catch (err) {
		throw err
	}
}
