import { all, takeLatest, put, select } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'

import BrowserServices from 'services/BrowserServices'

function* searchSongs(action) {
  // const { query } = action.payload
  // if (!query) return

  // const history = yield select(state => state.album.history)
  // const queryIndex = history.findIndex(querys => querys.query === query)
  // const hasAlreadySearched = queryIndex != -1

  // if (hasAlreadySearched) {
  //   debugger
  //   yield put(
  //     ActionCreators.setSongsbyHistory(history[queryIndex].albums, queryIndex)
  //   )
  //   return
  // }
  debugger

  // try {
  //   const response = yield BrowserServices.searchByAlbuns(query)
  //   if (response.ok) {
  //     const albums = response.data.albums.items
  //     yield put(ActionCreators.setSongs(albums))
  //   } else {
  //     console.log(response.error)
  //     yield put(ActionCreators.setSongsError(response.error))
  //   }
  // } catch (error) {
  //   console.log(error)
  //   yield put(ActionCreators.setSongsError(error))
  // }
}

export default all([takeLatest(ActionTypes.SEARCH_SONGS, searchSongs)])
