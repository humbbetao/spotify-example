import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'
import Reducer, { INITIAL_STATE } from '../reducer'
import albumMock from 'mock/albumMock'

describe('Album Reducer', () => {
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const action = { type: 'dummy_action' }
    const state = Reducer(INITIAL_STATE, action)
    expect(state).toEqual(INITIAL_STATE)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const query = 'rihanna'
    const action = ActionCreators.search(query)
    const state = Reducer(INITIAL_STATE, action)
    expect(state.albums).toEqual(INITIAL_STATE.albums)
    expect(state.history).toEqual(INITIAL_STATE.history)
    expect(state.albumsError).toEqual(INITIAL_STATE.albumsError)
    expect(state.query).toEqual(query)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const query = 'rihanna'
    let state
    const albums = albumMock
    const searchAction = ActionCreators.search(query)
    state = Reducer(INITIAL_STATE, searchAction)

    const action = ActionCreators.setAlbums(albums)
    state = Reducer(state, action)
    expect(state.albums).toEqual(albums)
    expect(state.history[state.history.length - 1].query).toEqual(query)
    expect(state.history[state.history.length - 1].albums).toEqual(albums)
    expect(state.albumsError).toEqual(INITIAL_STATE.albumsError)
    expect(state.query).toEqual(query)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const query = 'rihanna'
    let state
    const albums = albumMock
    const searchAction = ActionCreators.search(query)
    state = Reducer(INITIAL_STATE, searchAction)

    const action = ActionCreators.setAlbums(albums)
    state = Reducer(state, action)
    expect(state.albums).toEqual(albums)
    expect(state.history[state.history.length - 1].query).toEqual(query)
    expect(state.history[state.history.length - 1].albums).toEqual(albums)
    expect(state.albumsError).toEqual(INITIAL_STATE.albumsError)
    expect(state.query).toEqual(query)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const error = new Error('dumb error')
    const action = { type: 'dummy_action' }
    state = Reducer(INITIAL_STATE, action)
    const actionAlbumsError = ActionCreators.setAlbumsError(error)
    state = Reducer(state, actionAlbumsError)
    expect(state.albums).toEqual(INITIAL_STATE.albums)
    expect(state.history).toEqual(INITIAL_STATE.history)
    expect(state.albumsError).toEqual(error)
    expect(state.query).toEqual(INITIAL_STATE.query)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const error = new Error('dumb error')
    const action = { type: 'dummy_action' }
    state = Reducer(INITIAL_STATE, action)
    const actionError = ActionCreators.setAlbumsError(error)
    state = Reducer(state, actionError)
    expect(state.albums).toEqual(INITIAL_STATE.albums)
    expect(state.history).toEqual(INITIAL_STATE.history)
    expect(state.albumsError).toEqual(error)
    expect(state.query).toEqual(INITIAL_STATE.query)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const query = 'rihanna'
    let state
    const albums = albumMock
    const index = 0

    const searchAction = ActionCreators.search(query)
    state = Reducer(INITIAL_STATE, searchAction)
    const actionSetAlbumByHistory = ActionCreators.setAlbumsbyHistory(
      albums,
      index
    )
    state = Reducer(state, actionSetAlbumByHistory)

    expect(state.query).toEqual(query)
    expect(state.albums).toEqual(albums)
    expect(state.history[index].query).toEqual(query)
    expect(state.history[index].albums).toEqual(albums)
    expect(state.albumsError).toEqual(INITIAL_STATE.albumsError)
  })
})
