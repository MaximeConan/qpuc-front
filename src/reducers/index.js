import { combineReducers } from 'redux'

import appReducers from './appReducers'
import authReducers from './authReducers'
import questionReducers from './questionReducers'
import tokenReducers from './tokenReducers'
import userReducers from './userReducers'

export default combineReducers({
	app: appReducers,
	auth: authReducers,
	question: questionReducers,
	token: tokenReducers,
	user: userReducers
})
