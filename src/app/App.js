import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'
import './styles.css'
import Home from 'pages/home'
import Album from 'pages/album'
import NoMatch from 'pages/noMatch'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/albums/:artist/:album" component={Album}></Route>
        <Route
          exact
          path={['/', '/callback', '/albums/:artist']}
          component={Home}
        ></Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
