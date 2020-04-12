import ActionTypes from './actionTypes'
export default {
  search: function(query) {
    return {
      type: ActionTypes.SEARCH_SONGS,
      payload: { query },
    }
  },

  setAlbums: function(albums) {
    return {
      type: ActionTypes.SEARCH_SONGS_SUCCESS,
      payload: { albums },
    }
  },

  setAlbumsError: function(error) {
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
