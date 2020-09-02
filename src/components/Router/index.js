import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { routes } from './routes'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} exact path={route.path} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
