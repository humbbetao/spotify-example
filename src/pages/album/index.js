import { connect } from 'react-redux'
import Album from './Album'
import SongActions from 'store/reducers/songs/actionCreators'

function mapStateToProps(state) {
  return {
    album: state.album,
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getSongs: () => {
      const artist = ownProps.match.params.artist
      dispatch(SongActions.getSongs(artist))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Album)
