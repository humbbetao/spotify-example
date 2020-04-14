import { mount } from 'enzyme'
import React from 'react'
import { createMockStore } from 'redux-test-utils'
import { Provider } from 'react-redux'
import { Router, BrowserRouter } from 'react-router-dom'
import { createHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

export const mountWithRouterAndStore = (Component, storeState = {}) => {
  const store = createMockStore(storeState)

  return mount(
    <Provider store={store}>
      <BrowserRouter>{Component}</BrowserRouter>
    </Provider>
  )
}

export function mountWithRouterAndStore2(Component, storeState = {}) {
  const store = createMockStore(storeState)
  // const history = createHistory()
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
