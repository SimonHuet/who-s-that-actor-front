import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  error: null,
  audioDetails: {
    url: null,
    blob: null,
    chunks: null,
    duration: {
      h: 0,
      m: 0,
      s: 0,
    },
  },
  prediction: null,
}

const slice = createSlice({
  name: 'record',
  initialState: INITIAL_STATE,
  reducers: {
    uploadAudio: state => ({ ...state, error: null }),
    changeAudio: (state, { payload: audioDetails }) => ({
      ...state,
      error: null,
      audioDetails,
    }),
    failure: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    success: (state, { payload: prediction }) => ({
      ...state,
      prediction,
    }),
    clearAudio: () => ({
      ...INITIAL_STATE,
    }),
  },
})

export const { reducer } = slice
export const {
  uploadAudio,
  changeAudio,
  failure,
  success,
  clearAudio,
} = slice.actions

export const select = {
  error: state => state.record.error,
  audioDetails: state => state.record.audioDetails,
  prediction: state => state.record.prediction,
}
