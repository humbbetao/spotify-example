import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from 'pages/home'
import NoMatch from 'pages/noMatch'
import { Provider } from 'react-redux'
import storeRedux from 'store'
import './styles.css'

const App = () => (
  <Provider store={storeRedux}>
    <BrowserRouter>
      <Switch>
        <Route path={['/', '/callback']}>
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
