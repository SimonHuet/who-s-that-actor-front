import { combineReducers } from '@reduxjs/toolkit'
import { reducer as authReducer } from './Auth'
import { reducer as recordReducer } from './Record'

const rootReducer = combineReducers({
  auth: authReducer,
  record: recordReducer,
})

export default rootReducer
