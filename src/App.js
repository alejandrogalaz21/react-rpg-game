import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import Router from './components/Router'
const store = configureStore()

console.log(process.env.REACT_APP_ENV)
console.log({ store })

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default App
