import ActionTypes from './actionTypes'
export default {
  searchAlbuns: function(query) {
    return {
      type: ActionTypes.SEARCH_ALBUNS,
      payload: { query },
    }
  },

  setAlbuns: function(albuns) {
    return {
      type: ActionTypes.SEARCH_ALBUNS_SUCESS,
      payload: { albuns },
    }
  },

  setAlbunsError: function(error) {
    return {
      type: ActionTypes.SEARCH_ALBUNS_ERROR,
      payload: { error },
    }
  },
}
