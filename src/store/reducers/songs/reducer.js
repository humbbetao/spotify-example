import ActionTypes from './actionTypes'

export const INITIAL_STATE = {
  album: {},
  songs: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_SONGS:
      return {
        ...state,
      }
    case ActionTypes.SEARCH_SONGS_SUCCESS:
      return {
        ...state,
        songs: [...action.payload.songs],
      }

    case ActionTypes.SEARCH_SONGS_ERROR:
      return {
        ...state,
      }
    case ActionTypes.CLEAR_SONGS:
    case ActionTypes.CLEAR_ALBUM:
      return {
        ...state,
        songs: INITIAL_STATE.songs,
        album: INITIAL_STATE.album,
      }

    case ActionTypes.SET_ALBUM:
      return {
        ...state,
        album: { ...action.payload.album },
      }
    default:
      return state
  }
}
