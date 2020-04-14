import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'
import Home from 'pages/home'
import Album from 'pages/album'
import AlbumDetail from 'pages/albumDetail'
import NoMatch from 'pages/noMatch'
import PrivateRoute from 'components/PrivateRoute'

import './styles.css'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact
          path="/albums/:artist/:album"
          Component={AlbumDetail}
        />
        <PrivateRoute exact path="/albums/:artist" Component={Album} />
        <PrivateRoute exact path={['/', '/callback']} Component={Home} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
