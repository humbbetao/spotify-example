import { mount } from 'enzyme'
import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { Provider } from 'react-redux'
import { Router, BrowserRouter, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'

export const mountWithRouterAndStore = (Component, storeState = {}) => {
  const store = createMockStore(storeState)

  return mount(
    <Provider store={store}>
      <BrowserRouter>{Component}</BrowserRouter>
    </Provider>
  )
}

export const mountWithRouterAndStoreWithRoutes = (
  Component,
  storeState = {},
  path
) => {
  const store = createMockStore(storeState)

  return mount(
    <Provider store={store}>
      <BrowserRouter>
        <Router path={path} Component={Component}></Router>
      </BrowserRouter>
    </Provider>
  )
}

export function mountWithRouterAndStore2(Component, storeState = {}) {
  const store = createMockStore(storeState)
  const history = {}
  const options = {
    context: { store, router: { history, route: { location: {} } } },
    childContextTypes: {
      store: PropTypes.object.isRequired,
      router: PropTypes.object.isRequired,
    },
  }

  return mount(Component, options)
}
