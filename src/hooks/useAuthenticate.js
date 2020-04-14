import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useMatch, useHistory } from 'react-redux'
import AuthActionsCreators from 'store/reducers/auth/actionCreators'
import AlbumActions from 'store/reducers/album/actionCreators'
const ARTIST = 'ARTIST'

export function authenticate(isLogged) {
  const match = useMatch()
  const history = useHistory()
  const dispatch = useDispatch()

  localStorage.setItem(ARTIST, match.params.artist)

  if (isLogged) return
  try {
    let hashParams = {}
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }

    // const accessTokenFromQuery = query.get('code')
    // var accessTokenFromLocalStorage = localStorage.getItem(
    //   constants.ACCESS_TOKEN
    // )

    if (!hashParams.access_token) {
      const spotify = `${process.env.AUTH_API}/authorize?client_id=${process.env.CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${process.env.REDIRECT_URI}/callback`
      window.location.href = spotify
    } else {
      dispatch(AuthActionsCreators.setToken(hashParams.access_token))
    }
  } catch (e) {
    dispatch(AuthActionsCreators.setError())
  }
  //after isAuthenticated, when user artist saved in locastorage try to get again to request
  const artist = localStorage.getItem(ARTIST)

  //   if (!artist) {
  //     history.replace('/')
  //     return
  //   }

  //   localStorage.removeItem(ARTIST)

  if (!artist) return
  dispatch(AlbumActions.search(artist))
  history.push(`/album/${artist}`)
}

export function useAuthenticate() {
  const isLogged = useSelector(state => state.auth.isLogged)
  useEffect(() => authenticate(isLogged), [isLogged])
  return authenticate
}
