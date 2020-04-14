import ActionTypes from './actionTypes'
export const INITIAL_STATE = {
  fetchSongsPending: true,
  songPlaying: false,
  timeElapsed: 0,
  songId: 0,
  songPaused: true,
}

export default function sound(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.PLAY_SONG:
      return {
        ...state,
        songPlaying: true,
        songId: action.payload.song.id,
        timeElapsed: 0,
        songPaused: false,
      }

    case ActionTypes.STOP_SONG:
      return {
        ...state,
        songPlaying: false,
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
      console.log(
        action.payload.time,
        state.timeElapsed,
        action.payload.time + state.timeElapsed
      )
      const newTime = action.payload.time + state.timeElapsed
      console.log(action.payload.time, state.timeElapsed, newTime)
      return {
        ...state,
        timeElapsed: newTime,
      }

    default:
      return state
  }
}
