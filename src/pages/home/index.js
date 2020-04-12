import { connect } from 'react-redux'
import Home from './Home'
import AuthActionsCreators from 'store/reducers/auth/actionCreators'
import AlbumActions from 'store/reducers/album/actionCreators'

function mapStateToProps(state) {
  return {
    query: state.album.query,
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
