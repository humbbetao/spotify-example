import ActionTypes from './actionTypes'
export default {
  playSong: function(song) {
    return {
      type: ActionTypes.PLAY_SONG,
      payload: { song },
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

  increaseSongTime: function(time) {
    return {
      type: ActionTypes.INCREASE_SONG_TIME,
      payload: { time },
    }
  },
}
