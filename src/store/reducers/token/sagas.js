import { all, takeLatest, put, select } from 'redux-saga/effects'
import { api } from 'config/Request'

import ActionTypes from './actionTypes'

function* setTokenEffects(action) {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = `Bearer ${action.payload.accessToken}`
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
