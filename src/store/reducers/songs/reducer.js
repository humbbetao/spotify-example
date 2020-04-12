import ActionTypes from './actionTypes'

const INITIAL_STATE = {
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
      }
    case ActionTypes.SET_SONGS_BY_HISTORY:
      return {
        ...state,
      }

    case ActionTypes.SEARCH_SONGS_ERROR:
      return {
        ...state,
      }
    case ActionTypes.CLEAR_SONGS:
      return {
        ...state,
      }

    default:
      return state
  }
}
