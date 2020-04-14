import React from 'react'
import NoMatch from '../NoMatch'
import { mountWithRouterAndStore } from 'mock/mount'

describe('NoMatch', () => {
  it('should render correctly', () => {
    const wrapper = mountWithRouterAndStore(<NoMatch />)

    expect(wrapper).toMatchSnapshot()
  })
})
