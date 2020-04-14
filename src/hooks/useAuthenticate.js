import { useSelector, useDispatch } from 'react-redux'
import AuthActionsCreators from 'store/reducers/auth/actionCreators'
import constants from 'config/constants'
import { useHistory } from 'react-router-dom'

export default function useAuthenticate() {
  // if (localStorage.getItem(constants.ACCESS_TOKEN || state.auth.isLogged)) {
  //   return true
  // }

  const dispatch = useDispatch()
  const history = useHistory()

  const isLogged = useSelector(state => state.auth.isLogged)
  if (isLogged) return true

  try {
    let hashParams = {}
    let e,
      r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1)
    while ((e = r.exec(q))) {
      hashParams[e[1]] = decodeURIComponent(e[2])
    }

    if (!hashParams.access_token) {
      const spotify = `${process.env.AUTH_API}/authorize?client_id=${process.env.CLIENT_ID}&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=${process.env.REDIRECT_URI}/callback`
      window.location.href = spotify
    } else {
      dispatch(AuthActionsCreators.setToken(hashParams.access_token))

      const pathName = localStorage.getItem(constants.PREVIOUS_PATHNAME)
      localStorage.removeItem(constants.PREVIOUS_PATHNAME)

      history.push(pathName || '/')

      return true
    }
  } catch (e) {
    dispatch(AuthActionsCreators.setError())
    return false
  }
  dispatch(AuthActionsCreators.setError())
  return false
}
