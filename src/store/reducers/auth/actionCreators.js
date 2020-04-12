import ActionTypes from './actionTypes'
export default {
  getToken: function() {
    return {
      type: ActionTypes.GET_TOKEN,
    }
  },
  setToken: function(token) {
    return {
      type: ActionTypes.GET_TOKEN_SUCCESS,
      payload: { token },
    }
  },
  setError: function(error) {
    return {
      type: ActionTypes.GET_TOKEN_ERROR,
      payload: { error },
    }
  },
  requestRefreshToken: function() {
    return {
      type: ActionTypes.REQUEST_REFRESH_TOKEN,
    }
  },
  getRefreshToken: function(token) {
    return {
      type: ActionTypes.GET_REFRESH_TOKEN,
      payload: { token },
    }
  },
}
