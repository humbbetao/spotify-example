import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'
import './styles.css'
import Home from 'pages/home'
import Album from 'pages/album'
import AlbumDetail from 'pages/albumDetail'
import NoMatch from 'pages/noMatch'
import PrivateRoute from '../components/PrivateRoute'

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <PrivateRoute
          exact
          path="/albums/:artist/:album"
          component={AlbumDetail}
        />
        <PrivateRoute exact path="/albums/:artist" component={Album} />
        <Route exact path={['/', '/callback']} component={Home}></Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
