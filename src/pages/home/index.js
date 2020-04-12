import { connect } from 'react-redux'
import Home from './Home'
import TokenActionsCreators from 'store/reducers/auth/actionCreators'
import AlbumActions from 'store/reducers/album/actionCreators'

function mapStateToProps(state) {
  return {
    query: state.album.query,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setToken: token => {
      dispatch(TokenActionsCreators.setToken(token))
    },
    setError: error => {
      dispatch(TokenActionsCreators.setError(error))
    },
    searchAlbumByArtist: artist => {
      dispatch(AlbumActions.search(artist))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
