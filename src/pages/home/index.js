import { connect } from 'react-redux'
import Home from './Home'
import TokenActionsCreators from 'store/reducers/token/actionCreators'

function mapDispatchToProps(dispatch) {
  return {
    getToken: () => {
      dispatch(TokenActionsCreators.getToken())
    },
    setToken: token => {
      dispatch(TokenActionsCreators.setToken(token))
    },
    setError: error => {
      dispatch(TokenActionsCreators.setError(error))
    },
  }
}

export default connect(null, mapDispatchToProps)(Home)
