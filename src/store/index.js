import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import sagas from '../sagas'

const configureStore = () => {
	let store = null
	const sagaMiddleware = createSagaMiddleware()
	const enhancers = applyMiddleware(sagaMiddleware)
	if (process.env.NODE_ENV === 'development') {
		const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
			? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
					shouldHotReload: false,
			  })
			: compose
		store = createStore(reducers, composeEnhancers(enhancers))
	} else {
		store = createStore(reducers, compose(enhancers))
	}
	sagaMiddleware.run(sagas)

	return store
}

export default configureStore()
