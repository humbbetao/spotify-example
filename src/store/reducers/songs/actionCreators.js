import ActionTypes from './actionTypes'
export default {
  getSongs: function(albumID) {
    return {
      type: ActionTypes.SEARCH_SONGS,
      payload: { albumID },
    }
  },

  setSongs: function(songs) {
    return {
      type: ActionTypes.SEARCH_SONGS_SUCCESS,
      payload: { songs },
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
