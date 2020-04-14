import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'
import albumMock from 'mock/albumMock'
describe('Album Action creators', () => {
  it('search', () => {
    const query = 'rihanna'
    const action = ActionCreators.search(query)
    expect(action.type).toEqual(ActionTypes.SEARCH_ALBUMS)
    expect(action.payload.query).toEqual(query)
  })
  it('setAlbums', () => {
    const albums = albumMock
    const action = ActionCreators.setAlbums(albumMock)
    expect(action.type).toEqual(ActionTypes.SEARCH_ALBUMS_SUCCESS)
    expect(action.payload.albums).toEqual(albums)
  })
  it('setAlbumsError', () => {
    const error = new Error('dumb erro')
    const action = ActionCreators.setAlbumsError(error)
    expect(action.type).toEqual(ActionTypes.SEARCH_ALBUMS_ERROR)
    expect(action.payload.error).toEqual(error)
  })
  it('clearAlbum', () => {
    const action = ActionCreators.clearAlbum()
    expect(action.type).toEqual(ActionTypes.CLEAR_ALBUMS)
    expect(action.payload).toEqual(undefined)
  })
  it('setAlbumsbyHistory', () => {
    const albums = albumMock
    const index = 0
    const action = ActionCreators.setAlbumsbyHistory(albums, index)
    expect(action.type).toEqual(ActionTypes.SET_ALBUMS_BY_HISTORY)
    expect(action.payload.albums).toEqual(albums)
    expect(action.payload.index).toEqual(index)
  })
})
