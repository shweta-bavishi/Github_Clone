import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // default: localStorage if web, AsyncStorage if react-native

import Nav from './Nav'
import Auth from './Auth'

const config = {
  key: 'root',
  storage
}

const RootReducer = persistCombineReducers(config, {
  nav: Nav,
  auth: Auth
})

export default RootReducer
