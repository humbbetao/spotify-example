import ActionTypes from './actionTypes'
export const INITIAL_STATE = {
  isLogged: false,
}
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.GET_TOKEN_SUCCESS:
      return {
        ...state,
        isLogged: true,
      }
    case ActionTypes.GET_TOKEN_ERROR:
      return {
        ...state,
        isLogged: false,
      }
    default:
      return state
  }
}
