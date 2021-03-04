import { all, fork } from 'redux-saga/effects'

import authSaga from './Auth'

export default function* rootSaga() {
  yield all([fork(authSaga)])
}
