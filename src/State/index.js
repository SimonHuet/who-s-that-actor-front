import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './Auth'

const rootReducer = combineReducers({
  auth: authReducer,
})

export default rootReducer
