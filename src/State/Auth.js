import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  user: null,
  error: null,
  isLoading: false,
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
      isLoading: true,
      formData: { ...state.formData },
      errors: [],
    }),
    failure: (state, { payload: { error } }) => ({
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
    disconnected: state => ({
      ...state,
      isLoading: false,
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
  disconnected,
  changeFormData,
} = slice.actions

export const select = {
  isLoading: state => state.auth.isLoading,
  error: state => state.auth.error,
  user: state => state.auth.user,
}
