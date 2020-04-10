import ActionTypes from './actionTypes'
export default {
  fetchUser: function() {
    return {
      type: ActionTypes.FETCH_USER,
      user,
    }
  },

  fetchUserSuccess: function(user) {
    return {
      type: ActionTypes.FETCH_USER_SUCCESS,
      user,
    }
  },

  fetchUserError: function() {
    return {
      type: ActionTypes.FETCH_USER_ERROR,
    }
  },

  addSongToLibrary: function() {
    return {
      type: ActionTypes.ADD_SONG_TO_LIBRARY,
    }
  },
  addSongToLibrarySuccess: function(songId) {
    return {
      type: ActionTypes.ADD_SONG_TO_LIBRARY_SUCCESS,
      songId,
    }
  },

  addSongToLibraryError: function() {
    return {
      type: ActionTypes.ADD_SONG_TO_LIBRARY_ERROR,
    }
  },
}
