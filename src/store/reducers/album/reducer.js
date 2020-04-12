import ActionTypes from './actionTypes'

const INITIAL_STATE = {
  query: '',
  hasAlbumsRecentlySearched: false,
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
      debugger
      return {
        ...state,
        albums: action.payload.albums,
        hasAlbumsRecentlySearched: true,
      }

    case ActionTypes.SEARCH_ALBUMS_ERROR:
      return {
        ...state,
        albunsError: action.payload.albunsError,
      }

    default:
      return state
  }
}
