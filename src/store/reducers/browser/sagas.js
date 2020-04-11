import { all, takeLatest, put, select } from 'redux-saga/effects'
import Request from 'config/Request'

import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'

import BrowserServices from 'services/BrowserServices'

function* browserAlbuns(action) {
  const { query } = action.payload
  try {
    const response = yield BrowserServices.browserByAlbuns(query)
    if (response.ok) {
      yield put(ActionCreators.setAlbuns(id))
    } else {
      yield put(ActionCreators.setAlbunsError(response.error))
    }
  } catch (error) {
    yield put(ActionCreators.setAlbunsError(error))
  }
}

export default all([takeLatest(ActionTypes.SEARCH_ALBUNS, browserAlbuns)])
