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
      token,
    }
  },
  setError: function(error) {
    return {
      type: ActionTypes.GET_TOKEN_ERROR,
      error,
    }
  },
}
