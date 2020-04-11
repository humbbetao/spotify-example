import { all, takeLatest, put, select } from 'redux-saga/effects'
import Request from 'config/Request'

import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'

function* browserAlbuns() {
  try {
    const ids = 1

    const response = yield Request.get(
      `https://api.spotify.com/v1/me/tracks?ids=${ids}`
    )
    if (response.ok) {
      yield put(ActionCreators.setAlbuns(id))
    } else {
      yield put(ActionCreators.setAlbunsError(response.error))
    }
  } catch (e) {
    yield put(ActionCreators.setAlbunsError(err))
  }
}

export default all([takeLatest(ActionTypes.SEARCH_ALBUNS, browserAlbuns)])
