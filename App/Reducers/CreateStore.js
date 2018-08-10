// Reducers
import RootReducer from './index'

// Redux
import { createStore, applyMiddleware } from 'redux'

// Redux Middlewares
import logger from 'redux-logger'

// Redux Persist
import { persistStore } from 'redux-persist'

const middleware = applyMiddleware()

export default function configureStore() {
  let store = createStore(RootReducer)
  let persistor = persistStore(store)
  return { persistor, store }
}
