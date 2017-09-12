import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import reducers from './reducers'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const enhancers = [sagaMiddleware]

const store = createStore(reducers, applyMiddleware(...enhancers))

sagaMiddleware.run(sagas)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextReducers = reducers
    store.replaceReducer(nextReducers)
  })
}

export default store
