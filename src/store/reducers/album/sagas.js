import { all, takeLatest, put, select } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'

import BrowserServices from 'services/BrowserServices'

function* searchAlbums(action) {
  const { query } = action.payload
  if (!query) return

  const history = yield select(state => state.album.history)
  const queryIndex = history.findIndex(querys => querys.query === query)
  const hasAlreadySearched = queryIndex != -1

  if (hasAlreadySearched) {
    yield put(
      ActionCreators.setAlbumsbyHistory(history[queryIndex].albums, queryIndex)
    )
    return
  }

  try {
    const response = yield BrowserServices.searchByAlbuns(query)
    if (response.ok) {
      const albums = response.data.albums.items
      yield put(ActionCreators.setAlbums(albums))
    } else {
      console.log(response.error)
      yield put(ActionCreators.setAlbumsError(response.error))
    }
  } catch (error) {
    console.log(error)
    yield put(ActionCreators.setAlbumsError(error))
  }
}

export default all([takeLatest(ActionTypes.SEARCH_ALBUMS, searchAlbums)])
