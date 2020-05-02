export const resolveApiUrl = (endpoint) => {
  return `${process.env.REACT_APP_BASE_URL}${endpoint}`
}