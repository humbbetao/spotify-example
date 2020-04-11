import ActionTypes from './actionTypes'

export default function browserReducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.SEARCH_ALBUNS:
      return {
        ...state,
        query: action.payload.query,
      }
    case ActionTypes.SEARCH_ALBUNS_SUCCESS:
      return {
        ...state,
        albuns: action.payload.albuns,
      }

    case ActionTypes.SEARCH_ALBUNS_ERROR:
      return {
        ...state,
        albunsError: action.payload.albunsError,
      }

    default:
      return state
  }
}
