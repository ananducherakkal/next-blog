export function getError (error) {
  if (error && error.response && error.response.data && error.response.data.errors) {
    return error.response.data.errors
  }
  return null
}
export function getErrorMessage (error) {
  if (error && error.response && error.response.data && error.response.data.message) {
    return error.response.data.message
  }
  return null
}
export function getErrorStatus (error) {
  if (error && error.response && error.response.status) {
    return error.response.status
  }
  return null
}
