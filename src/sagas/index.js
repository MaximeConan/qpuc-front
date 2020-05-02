import { fork } from 'redux-saga/effects'

import userSagas from './userSagas'
import appSagas from './appSagas'
import storageSagas from './storageSagas'
import apiSagas from './apiSagas'
import tokenSagas from './tokenSagas'
import questionSagas from './questionSagas'

export default function*() {
	yield fork(appSagas)
	yield fork(userSagas)
	yield fork(storageSagas)
	yield fork(apiSagas)
	yield fork(tokenSagas)
	yield fork(questionSagas)
}
