import { fork } from 'redux-saga/effects'

import userSagas from './userSagas'
import appSagas from './appSagas'
import authSagas from './authSagas'
import storageSagas from './storageSagas'
import apiSagas from './apiSagas'
import tokenSagas from './tokenSagas'
import questionSagas from './questionSagas'
import navSagas from './navSagas'

export default function*() {
	yield fork(authSagas)
	yield fork(appSagas)
	yield fork(userSagas)
	yield fork(storageSagas)
	yield fork(apiSagas)
	yield fork(navSagas)
	yield fork(tokenSagas)
	yield fork(questionSagas)
}
