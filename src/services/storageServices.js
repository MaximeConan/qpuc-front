export const getFromStorageService = key => {
	try {
		let value = localStorage.getItem(key)
		try {
			return JSON.parse(value)
		} catch (error) {
			return value
		}
	} catch (error) {
		throw error
	}
}

export const setToStorageService = (key, value) => {
	try {
		if (!key) {
			return false
		}
		if (value) {
			localStorage.setItem(key, JSON.stringify(value))
		} else {
			localStorage.removeItem(key)
		}
		return true
	} catch (error) {
		throw error
	}
}
