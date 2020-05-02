import { combineReducers } from 'redux'

import appReducers from './appReducers'
import userReducers from './userReducers'
import tokenReducers from './tokenReducers'
import questionReducers from './questionReducers'

export default combineReducers({
  app: appReducers,
  user: userReducers,
  token: tokenReducers,
  question: questionReducers
})
