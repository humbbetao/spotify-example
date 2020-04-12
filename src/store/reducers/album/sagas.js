import { all, takeLatest, put, select } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'

import BrowserServices from 'services/BrowserServices'

function* searchAlbums(action) {
  debugger
  const { query } = action.payload
  try {
    const response = yield BrowserServices.searchByAlbuns(query)
    if (response.ok) {
      debugger
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
