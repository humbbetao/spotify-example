import { all, takeLatest, put } from 'redux-saga/effects'
import ActionTypes from './actionTypes'
import ActionCreators from './actionCreators'

export function* addSongToLibrary(accessToken, id) {
  try {
    const request = new Request(
      `https://api.spotify.com/v1/me/tracks?ids=${id}`,
      {
        method: 'PUT',
        headers: new Headers({
          Authorization: 'Bearer ' + accessToken,
        }),
      }
    )

    const response = yield fetch(request)
    if (response.ok) {
      yield put(ActionCreators.addSongToLibrarySuccess(id))
    } else {
      yield put(ActionCreators.addSongToLibraryError(response.error))
    }
  } catch (e) {
    yield put(ActionCreators.addSongToLibraryError(err))
  }
}

export function* fetchUser(accessToken) {
  try {
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        Authorization: 'Bearer ' + accessToken,
      }),
    })

    const response = yield fetch(request)
    if (response.ok) {
      // send user back to homepage if no token
      if (res.statusText === 'Unauthorized') {
        window.location.href = './'
      }
      yield put(ActionCreators.fetchUserSuccess(res.json()))
    } else {
      yield put(ActionCreators.fetchUserError(err))
    }
  } catch (e) {
    yield put(ActionCreators.fetchUserError(err))
  }
}

export default all([
  takeLatest(ActionTypes.FETCH_USER, addSongToLibrary),
  takeLatest(ActionTypes.ADD_SONG_TO_LIBRARY, addSongToLibrary),
])
