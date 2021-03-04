export const login = ({ email, password }) => ({
  path: '/users/login',
  options: {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  },
})
