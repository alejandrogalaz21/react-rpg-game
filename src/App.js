import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Router from './components/Router'
export const store = configureStore()

console.log(process.env.REACT_APP_ENV)

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
