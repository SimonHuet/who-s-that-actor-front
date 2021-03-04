import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: null,
  error: null,
  isLoading: false,
}

const slice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    login: state => ({
      ...state,
      isLoading: true,
    }),
    failure: (state, { payload: error }) => ({
      ...state,
      error,
      isLoading: false,
    }),
    disconnect: state => ({
      ...state,
      isLoading: true,
    }),
    userFetched: (state, { payload: { user } }) => ({
      ...state,
      user,
      error: null,
      isLoading: false,
    }),
  },
})

export const { reducer } = slice
export const { login, failure, disconnect, userFetched } = slice.actions
export const select = {
  isLoading: state => state.auth.isLoading,
  error: state => state.auth.error,
  user: state => state.auth.user,
}
