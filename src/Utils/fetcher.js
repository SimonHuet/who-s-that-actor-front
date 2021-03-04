export const fetchApi = ({ path, options = {} }) =>
  fetch(`${process.env.REACT_APP_API}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
      ...(localStorage.getItem('userToken') && {
        Authorization: localStorage.getItem('userToken'),
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
