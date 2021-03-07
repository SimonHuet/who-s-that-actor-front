export const upload = ({ file, userId }) => {
  const formData = new FormData()

  formData.append('file', [file])
  formData.append('user_id', userId)

  return {
    path: '/prediction',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    },
  }
}
