export const remove = () =>
  ['userToken', 'userId'].map(key => localStorage.removeItem(key))

export const add = userToken => localStorage.setItem('userToken', userToken)

export const addUserId = userId => localStorage.setItem('userId', userId)
