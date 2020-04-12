import ActionTypes from './actionTypes'
export default {
  search: function(query) {
    return {
      type: ActionTypes.SEARCH_ALBUMS,
      payload: { query },
    }
  },

  setAlbums: function(albums) {
    return {
      type: ActionTypes.SEARCH_ALBUMS_SUCCESS,
      payload: { albums },
    }
  },

  setAlbumsError: function(error) {
    return {
      type: ActionTypes.SEARCH_ALBUMS_ERROR,
      payload: { error },
    }
  },
  clearAlbum: function() {
    return {
      type: ActionTypes.CLEAR_ALBUMS,
    }
  },
  setAlbumsbyHistory: function(albums, index) {
    return {
      type: ActionTypes.SET_ALBUMS_BY_HISTORY,
      payload: { albums, index },
    }
  },
}
