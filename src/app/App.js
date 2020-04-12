import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from 'store'
import './styles.css'

const Home = lazy(() => import('pages/home' /* webpackChunkName: 'home' */))
const Album = lazy(() => import('pages/album' /* webpackChunkName: 'album' */))
const NoMatch = lazy(() =>
  import('pages/noMatch' /* webpackChunkName: 'noMatch'*/)
)
const Loading = () => <div style={{ color: '#fff' }}>Loading</div>
const App = () => (
  <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Switch>
          <Route path="/albums/:artist">
            <Album></Album>
          </Route>
          <Route exact path={['/', '/callback']}>
            <Home></Home>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  </Provider>
)

export default App
