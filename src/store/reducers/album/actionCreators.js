import ActionTypes from './actionTypes'
export default {
  search: function(query) {
    return {
      type: ActionTypes.SEARCH_ALBUMS,
      payload: { query },
    }
  },

  setAlbums: function(albums) {
    debugger
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
}
