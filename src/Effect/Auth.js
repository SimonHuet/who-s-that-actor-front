import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchApi } from '../Utils/fetcher'
import * as UserApi from './Api/User'
import * as JwtLocalStorage from './LocalStorage/Jwt'

import * as AuthState from '../State/Auth'

export function* login({ payload: { email, password } }) {
  try {
    const user = yield callApi(UserApi.login({ email, password }))
    yield put(AuthState.userFetched(user))
  } catch (error) {
    console.log(error)
    yield put(AuthState.failure(error))
  }
}

export function* callApi({ ...fetchParam }) {
  return yield call(fetchApi, fetchParam)
}

export function* setToken({
  payload: {
    token,
    user: { id },
  },
}) {
  yield call(JwtLocalStorage.add, token)
  yield call(JwtLocalStorage.addUserId, id)
}

export function* disconnect() {
  yield call(JwtLocalStorage.remove)
}

export default function* rootSaga() {
  yield takeEvery(AuthState.login, login)
  yield takeEvery(AuthState.disconnect, disconnect)
  yield takeEvery(AuthState.userFetched, setToken)
}
