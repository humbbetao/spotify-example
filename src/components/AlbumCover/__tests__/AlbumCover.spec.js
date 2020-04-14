import React from 'react'
import { shallow } from 'enzyme'
import AlbumCover from '../AlbumCover'
import { mountWithRouterAndStore } from '../mock'

describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const reduxState = { foo: 'bar' }
    const wrapper = mountWithRouterAndStore(<AlbumCover />, reduxState)
    // const component = wrapper(<AlbumCover debug />)

    expect(wrapper).toMatchSnapshot()
  })
})
