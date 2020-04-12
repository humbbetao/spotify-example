import { all, takeLatest, put, select } from 'redux-saga/effects'
import { api } from 'config/Request'

import ActionTypes from './actionTypes'

function* setTokenEffects(action) {
  const token = yield select(state => state.token.token)
  // console.log('token', action.payload.token)
  api.addRequestTransform(request => {
    request.headers['Authorization'] = `Bearer ${token}`
  })
}

function* setTokenInvalid() {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = ''
  })
}

export default all([
  takeLatest(ActionTypes.GET_TOKEN_SUCCESS, setTokenEffects),
  takeLatest(ActionTypes.GET_TOKEN_ERROR, setTokenInvalid),
])
