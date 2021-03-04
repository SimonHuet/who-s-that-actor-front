import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchApi } from '../Utils/fetcher'
import * as UserApi from './Api/User'
import * as JwtLocalStorage from './LocalStorage/Jwt'

import * as AuthState from '../State/Auth'

export function* login({ payload: { email, password } }) {
  try {
    const user = fetchApi(UserApi.login(email, password))
    yield put(AuthState.UserFetched(user))
    yield JwtLocalStorage.add(user.token)
  } catch (error) {
    yield put(AuthState.failure(error))
  }
}

export function* disconnect() {
  yield call(JwtLocalStorage.remove)
  yield put(AuthState.disconnected())
}

export default function* rootSaga() {
  yield takeEvery(AuthState.login, login)
  yield takeEvery(AuthState.disconnect, disconnect)
}
