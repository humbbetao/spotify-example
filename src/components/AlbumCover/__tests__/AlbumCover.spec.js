import React from 'react'
import AlbumCover from '../AlbumCover'
import { mountWithRouterAndStore } from 'mock/mount'
import { INITIAL_STATE } from 'store/reducers/songs/reducer'
import albumMock from 'mock/albumMock'

describe('MyComponent', () => {
  it('should render correctly in when album is empty', () => {
    const reduxState = { state: { songs: { INITIAL_STATE } } }
    console.log(INITIAL_STATE)
    console.log(reduxState)
    const wrapper = mountWithRouterAndStore(<AlbumCover />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly in when album is no empty', () => {
    const reduxState = { state: { songs: { INITIAL_STATE } } }
    console.log(INITIAL_STATE)
    console.log(reduxState)
    const album = albumMock[0]
    const wrapper = mountWithRouterAndStore(<AlbumCover album={album} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should render correctly in when album is no empty', () => {
    const reduxState = { state: { songs: { INITIAL_STATE } } }
    console.log(INITIAL_STATE)
    console.log(reduxState)
    const album = albumMock[0]
    const wrapper = mountWithRouterAndStore(<AlbumCover album={album} />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should call onClick when is clicked in card', () => {
    const reduxState = { state: { songs: { INITIAL_STATE } } }
    console.log(INITIAL_STATE)
    console.log(reduxState)
    const album = albumMock[0]
    const wrapper = mountWithRouterAndStore(<AlbumCover album={album} />, {})

    expect(wrapper.find('.album-item').exists()).toBeTruthy()
    expect(wrapper.exists('.album-item')).toBeTruthy()
    wrapper.find('.album-item').simulate('click')
    console.log(wrapper.find('.album-item'))
    expect(wrapper.exists('.album-item')).toBeFalsy()
  })
})
