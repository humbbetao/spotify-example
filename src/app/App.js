import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import Album from 'pages/album'
import NoMatch from 'pages/noMatch'
import { Provider } from 'react-redux'
import store from 'store'
import './styles.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/albums/:artist" component={Album}></Route>
        <Route path={['/', '/callback']} component={Home}></Route>
        <Route path="*" component={NoMatch}></Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
