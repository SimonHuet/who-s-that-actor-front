export const login = ({ email, password }) => ({
  path: '/api/user/login',
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email,
      password,
    },
  },
})
