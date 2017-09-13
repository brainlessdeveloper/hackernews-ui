import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const devTools = process.env.NODE_ENV !== 'production' &&
  window.devToolsExtension ?
  window.devToolsExtension() :
  f => f

const enhancer = compose(applyMiddleware(sagaMiddleware), devTools)

const store = createStore(reducers, enhancer)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = reducers
    store.replaceReducer(nextReducers)
  })
}

sagaMiddleware.run(sagas)

export default store
