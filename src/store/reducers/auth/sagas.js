import { all, takeLatest, select, put } from 'redux-saga/effects'
import { api } from 'config/Request'
import ActionTypes from './actionTypes'
import AuthActions from './actionCreators'
import constants from 'config/constants'
import OAuthServices from 'services/OAuthServices'

function embbedTokenOnApi(token) {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = `Bearer ${token}`
  })
}

function removeTokenOnApi() {
  api.addRequestTransform(request => {
    request.headers['Authorization'] = ''
  })
}
function* getRefreshToken() {}

function* setTokenEffects() {
  // yield put(AuthActions.requestRefreshToken())
  const token = yield select(state => state.auth.token)
  embbedTokenOnApi(token)
  localStorage.setItem(constants.ACCESS_TOKEN, token)
  // const refreshThreshold = new Date.getTime() + 300000
  // api.addResponseTransform(response => {
  //   // if (response.data.code === 401) {
  //   AuthActions.getRefreshToken()
  //   // const newToken = await myApi.getNewToken({refreshToken: 'xxx'})
  //   // // here I have new token and I'd like to use orignal config to re-attempt request
  //   // const originalConfig = response.config
  //   // const newResponse = await  myApi.getNewToken.originalConfig)
  //   // // and then return new response as oginal response
  //   // // so probably something like
  //   // response = newResponse
  //   // }
  //   return response
  // })
}

// The syntax for reading the localStorage item is as follows:

// localStorage.setItem('myCat', 'Tom');
// The syntax for reading the localStorage item is as follows:

// var cat = localStorage.getItem('myCat');
// The syntax for removing the localStorage item is as follows:

// localStorage.removeItem('myCat');
// The syntax for removing all the localStorage items is as follows:

// // Clear all items
// localStorage.clear();

function* setTokenInvalid() {
  removeTokenOnApi()
  localStorage.removeItem(constants.ACCESS_TOKEN)
}

// function* requestRefreshToken() {
//   try {
//     // const response = yield OAuthServices.requestRefreshToken(
//     //   yield select(state => state.auth.token)
//     // )
//     if (response.ok) {
//       // const albums = response.data.albums.items
//       // yield put(ActionCreators.setAlbums(albums))
//     } else {
//       // yield put(ActionCreators.setAlbumsError(response.error))
//     }
//   } catch (error) {
//     // yield put(ActionCreators.setAlbumsError(error))
//   }
// }
export default all([
  takeLatest(ActionTypes.GET_TOKEN_SUCCESS, setTokenEffects),
  takeLatest(ActionTypes.GET_TOKEN_ERROR, setTokenInvalid),
  // takeLatest(ActionTypes.REQUEST_REFRESH_TOKEN, requestRefreshToken),
])
