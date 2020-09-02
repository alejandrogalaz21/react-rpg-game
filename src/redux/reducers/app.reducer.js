export function app(state, action) {
  return {
    date: new Date(),
    env: process.env.REACT_APP_ENV
  }
}
