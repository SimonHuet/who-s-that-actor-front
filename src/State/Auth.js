import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: null,
  error: null,
  formData: {
    email: '',
    password: '',
  },
}

const slice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    login: state => ({
      ...state,
      formData: { ...state.formData },
      errors: [],
    }),
    failure: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    disconnect: state => ({
      ...state,
    }),
    userFetched: (state, { payload: { user } }) => ({
      ...state,
      user,
      error: null,
    }),
    changeFormData: (state, { field, data }) => ({
      ...state,
      formData: {
        ...state.formData,
        [field]: data,
      },
    }),
  },
})

export const { reducer } = slice
export const {
  login,
  failure,
  disconnect,
  userFetched,
  changeFormData,
} = slice.actions

export const select = {
  error: state => state.auth.error,
  user: state => state.auth.user,
}
