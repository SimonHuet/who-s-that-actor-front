export const remove = () => localStorage.removeItem('userToken')

export const add = userToken => localStorage.setItem('userToken', userToken)
