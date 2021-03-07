import { call, put, takeEvery } from 'redux-saga/effects'
import { fetchApi } from '../Utils/fetcher'
import * as RecordApi from './Api/Prediction'

import * as RecordState from '../State/Record'

export function* upload({ payload: { file } }) {
  try {
    const prediction = yield callApi(
      RecordApi.upload({ file, userId: localStorage.getItem('userId') })
    )
    yield put(RecordState.success(prediction))
  } catch (error) {
    yield put(RecordState.failure(error))
  }
}

export function* callApi({ ...fetchParam }) {
  return yield call(fetchApi, fetchParam)
}

export default function* rootSaga() {
  yield takeEvery(RecordState.uploadAudio, upload)
}
