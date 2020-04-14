import { all, takeLatest } from 'redux-saga/effects'
import { api } from 'config/Request'
import ActionTypes from './actionTypes'
import constants from 'config/constants'

function tokenRefreshMonitor(response) {
  if (response.code === 401) {
  }
}

function embbedTokenOnApi() {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = `Bearer ${localStorage.getItem(
      constants.ACCESS_TOKEN
    )}`
  })

  api.addMonitor(tokenRefreshMonitor)
}

function removeTokenOnApi() {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = ''
  })
}

function* setTokenEffects(action) {
  localStorage.setItem(constants.ACCESS_TOKEN, action.payload.token)
  embbedTokenOnApi()
}

function* setTokenInvalid() {
  removeTokenOnApi()
  localStorage.removeItem(constants.ACCESS_TOKEN)
}

export default all([
  takeLatest(ActionTypes.GET_TOKEN_SUCCESS, setTokenEffects),
  takeLatest(ActionTypes.GET_TOKEN_ERROR, setTokenInvalid),
  // takeLatest(ActionTypes.REQUEST_REFRESH_TOKEN, requestRefreshToken),
])
