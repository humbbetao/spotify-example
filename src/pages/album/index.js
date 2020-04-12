import { connect } from 'react-redux'
import Album from './Album'
// import TokenActionsCreators from 'store/reducers/token/actionCreators'

// function mapStateToProps(state) {
//   return {
//     query: state.album.query,
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setToken: token => {
//       dispatch(TokenActionsCreators.setToken(token))
//     },
//     setError: error => {
//       dispatch(TokenActionsCreators.setError(error))
//     },
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Home)
export default Album
