import { all, takeLatest, select } from 'redux-saga/effects'
import { api } from 'config/Request'
import ActionTypes from './actionTypes'
import constants from 'config/constants'
function* setTokenEffects() {
  const token = yield select(state => state.auth.token)
  api.addRequestTransform(request => {
    request.headers['Authorization'] = `Bearer ${token}`
  })
  localStorage.setItem(constants.ACCESS_TOKEN, token)
  // The syntax for reading the localStorage item is as follows:
}

// localStorage.setItem('myCat', 'Tom');
// The syntax for reading the localStorage item is as follows:

// var cat = localStorage.getItem('myCat');
// The syntax for removing the localStorage item is as follows:

// localStorage.removeItem('myCat');
// The syntax for removing all the localStorage items is as follows:

// // Clear all items
// localStorage.clear();

function* setTokenInvalid() {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = ''
  })
  localStorage.removeItem(constants.ACCESS_TOKEN)
}

export default all([
  takeLatest(ActionTypes.GET_TOKEN_SUCCESS, setTokenEffects),
  takeLatest(ActionTypes.GET_TOKEN_ERROR, setTokenInvalid),
])
