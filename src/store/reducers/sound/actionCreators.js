import ActionTypes from './actionTypes '
export default {
  playSong: function(song) {
    return {
      type: ActionTypes.PLAY_SONG,
      song,
    }
  },

  stopSong: function() {
    return {
      type: ActionTypes.STOP_SONG,
    }
  },

  pauseSong: function() {
    return {
      type: ActionTypes.PAUSE_SONG,
    }
  },

  resumeSong: function() {
    return {
      type: ActionTypes.RESUME_SONG,
    }
  },

  playSong: function(time) {
    return {
      type: ActionTypes.INCREASE_SONG_TIME,
      time,
    }
  },

  updateViewType: function(view) {
    return {
      type: ActionTypes.UPDATE_VIEW_TYPE,
      view,
    }
  },
}
