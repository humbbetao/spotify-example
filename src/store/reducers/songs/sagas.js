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
      const songs = response.data.tracks.items
      yield put(ActionCreators.setSongs(songs))
    } else {
      yield put(ActionCreators.setSongsError(response.data))
    }
  } catch (error) {
    yield put(ActionCreators.setSongsError(error))
  }
}

export default all([takeLatest(ActionTypes.SEARCH_SONGS, searchSongs)])
