import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  error: null,
  prediction: null,
}

const slice = createSlice({
  name: 'record',
  initialState: INITIAL_STATE,
  reducers: {
    uploadAudio: state => ({ ...state, error: null }),
    failure: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    success: (state, { payload: prediction }) => ({
      ...state,
      prediction,
    }),
  },
})

export const { reducer } = slice
export const { uploadAudio, failure, success } = slice.actions

export const select = {
  error: state => state.record.error,
  prediction: state => state.record.prediction,
}
