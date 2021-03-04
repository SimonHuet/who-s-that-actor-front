export const fetchApi = ({ path, options = {} }) =>
  fetch(`${process.env.REACT_APP_BACKEND_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(localStorage.get('userToken') && {
        Authorization: localStorage.get('userToken'),
      }),
    },
  })
    .then(response => Promise.all([response, response.json()]))
    .then(([{ status }, body]) => {
      if (400 <= status && typeof body === 'object' && body !== null) {
        return Promise.reject(body)
      }

      return body
    })
