import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './State'
import createSagaMiddleware from 'redux-saga'
import effects from './Effect'

export const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
  })

  sagaMiddleware.run(effects)

  return store
}

export default createStore()
