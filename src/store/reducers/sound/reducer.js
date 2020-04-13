import ActionTypes from './actionTypes'
const INITIAL_STATE = {
  fetchSongsPending: true,
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  viewType: 'songs',
  songPaused: true,
  volume: volume,
}

export default function sound(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_VOLUME:
      return {
        volume: action.payload.volume,
      }

    case ActionTypes.PLAY_SONG:
      return {
        ...state,
        songPlaying: true,
        songDetails: action.payload.song,
        songId: action.payload.song.id,
        timeElapsed: 0,
        songPaused: false,
      }

    case ActionTypes.STOP_SONG:
      return {
        ...state,
        songPlaying: false,
        songDetails: null,
        timeElapsed: 0,
        songPaused: true,
      }

    case ActionTypes.PAUSE_SONG:
      return {
        ...state,
        songPaused: true,
      }

    case ActionTypes.RESUME_SONG:
      return {
        ...state,
        songPaused: false,
      }

    case ActionTypes.INCREASE_SONG_TIME:
      return {
        ...state,
        timeElapsed: action.payload.time,
      }

    default:
      return state
  }
}
