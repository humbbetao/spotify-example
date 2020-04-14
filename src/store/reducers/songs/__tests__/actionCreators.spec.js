import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'
import albumMock from 'mock/albumMock'

describe('Songs Action creators', () => {
  it('getSongs', () => {
    const albumID = 'dumbAlbumId'
    const action = ActionCreators.getSongs(albumID)
    expect(action.type).toEqual(ActionTypes.SEARCH_SONGS)
    expect(action.payload.albumID).toEqual(albumID)
  })
  it('setSongs', () => {
    const songs = 'songs'
    const action = ActionCreators.setSongs(songs)
    expect(action.type).toEqual(ActionTypes.SEARCH_SONGS_SUCCESS)
    expect(action.payload.songs).toEqual(songs)
  })
  it('setSongsError', () => {
    const error = new Error('dumb error')
    const action = ActionCreators.setSongsError(error)
    expect(action.type).toEqual(ActionTypes.SEARCH_SONGS_ERROR)
    expect(action.payload.error).toEqual(error)
  })
  it('clear', () => {
    const action = ActionCreators.clear()
    expect(action.type).toEqual(ActionTypes.CLEAR_SONGS)
    expect(action.payload).toEqual(undefined)
  })
  it('setAlbum', () => {
    const album = albumMock
    const action = ActionCreators.setAlbum(album)
    expect(action.type).toEqual(ActionTypes.SET_ALBUM)
    expect(action.payload.album).toEqual(album)
  })

  it('clearAlbum', () => {
    const action = ActionCreators.clearAlbum()
    expect(action.type).toEqual(ActionTypes.CLEAR_ALBUM)
  })
})
