import { all, fork } from 'redux-saga/effects'

import authSaga from './Auth'
import recordSaga from './Record'

export default function* rootSaga() {
  yield all([fork(authSaga), fork(recordSaga)])
}
