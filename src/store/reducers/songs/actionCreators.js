import ActionTypes from './actionTypes'
export default {
  getSongs: function(albumID) {
    return {
      type: ActionTypes.SEARCH_SONGS,
      payload: { albumID },
    }
  },

  setSongs: function(albums) {
    return {
      type: ActionTypes.SEARCH_SONGS_SUCCESS,
      payload: { albums },
    }
  },

  setSongsError: function(error) {
    return {
      type: ActionTypes.SEARCH_SONGS_ERROR,
      payload: { error },
    }
  },
  clear: function() {
    return {
      type: ActionTypes.CLEAR_SONGS,
    }
  },
}
