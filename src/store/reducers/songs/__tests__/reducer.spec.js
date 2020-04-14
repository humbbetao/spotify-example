import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'
import Reducer, { INITIAL_STATE } from '../reducer'
import albumMock from 'mock/albumMock'
import songsMock from 'mock/songMock'

describe('Songs Reducer', () => {
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const action = { type: 'dummy_action' }
    const state = Reducer(INITIAL_STATE, action)
    expect(state.album).toEqual(INITIAL_STATE.album)
    expect(state.songs).toEqual(INITIAL_STATE.songs)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const songs = songsMock
    const action = ActionCreators.setSongs(songs)
    const state = Reducer(INITIAL_STATE, action)
    expect(state.songs).toEqual(songs)
    expect(state.album).toEqual(INITIAL_STATE.album)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const error = new Error()
    const action = ActionCreators.setSongsError(error)
    state = Reducer(INITIAL_STATE, action)
    expect(state.songsError).toEqual(error)
  })
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const action = ActionCreators.clear()
    state = Reducer(INITIAL_STATE, action)
    expect(state.album).toEqual(INITIAL_STATE.album)
    expect(state.songs).toEqual(INITIAL_STATE.songs)
  })
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const action = ActionCreators.clearAlbum()
    state = Reducer(INITIAL_STATE, action)
    expect(state.album).toEqual(INITIAL_STATE.album)
    expect(state.songs).toEqual(INITIAL_STATE.songs)
  })

  it('Here Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const album = albumMock[0]
    const action = ActionCreators.setAlbum(album)
    state = Reducer(INITIAL_STATE, action)
    expect(state.album.length).toEqual(album.length)
    expect(state.songs).toEqual(INITIAL_STATE.songs)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const album = albumMock[0]
    const songs = songsMock
    const actionSongs = ActionCreators.setSongs(songs)
    state = Reducer(INITIAL_STATE, actionSongs)
    const actionAlbum = ActionCreators.setAlbum(album)
    state = Reducer(state, actionAlbum)
    expect(state.album.length).toEqual(album.length)
    expect(state.songs).toEqual(songs)
  })
})
