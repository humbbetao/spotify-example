import ActionTypes from './actionTypes'

const INITIAL_STATE = {
  query: '',
  history: [],
  albums: [],
}

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_ALBUMS:
      return {
        ...state,
        query: action.payload.query,
      }
    case ActionTypes.SEARCH_ALBUMS_SUCCESS:
      return {
        ...state,
        albums: action.payload.albums,
        history: [
          ...state.history,
          { query: state.query, albums: action.payload.albums },
        ],
      }
    case ActionTypes.SET_ALBUMS_BY_HISTORY:
      const historyClone = [...state.history]
      historyClone.splice(action.payload.index, 1)

      return {
        ...state,
        albums: action.payload.albums,
        history: [
          ...state.history,
          { query: state.query, albums: action.payload.albums },
        ],
      }

    case ActionTypes.SEARCH_ALBUMS_ERROR:
      return {
        ...state,
        albunsError: action.payload.albunsError,
      }
    case ActionTypes.CLEAR_ALBUMS:
      return {
        ...state,
        query: INITIAL_STATE.query,
        albums: INITIAL_STATE.albums,
      }

    default:
      return state
  }
}
