import { all, takeLatest, put, select } from 'redux-saga/effects'
import ActionCreators from './actionCreators'
import ActionTypes from './actionTypes'
import BrowserServices from 'services/BrowserServices'

function* searchSongs(action) {
  try {
    const response = yield BrowserServices.searchSongsByAlbumId(
      action.payload.albumID
    )
    if (response.ok) {
      const albums = response.data.albums.items
      yield put(ActionCreators.setSongs(albums))
    } else {
      console.log(response.error)
      yield put(ActionCreators.setSongsError(response.error))
    }
  } catch (error) {
    console.log(error)
    yield put(ActionCreators.setSongsError(error))
  }
}

export default all([takeLatest(ActionTypes.SEARCH_SONGS, searchSongs)])
