import { connect } from 'react-redux'
import Home from './Home'
import AuthActionsCreators from 'store/reducers/auth/actionCreators'
import AlbumActions from 'store/reducers/album/actionCreators'

function mapDispatchToProps(dispatch) {
  return {
    setToken: token => {
      dispatch(AuthActionsCreators.setToken(token))
    },
    setError: error => {
      dispatch(AuthActionsCreators.setError(error))
    },
    searchAlbumByArtist: artist => {
      dispatch(AlbumActions.search(artist))
    },
  }
}

export default connect(null, mapDispatchToProps)(Home)
