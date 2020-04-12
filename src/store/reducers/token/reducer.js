import ActionTypes from './actionTypes'
export default function reducer(state = {}, action) {
  switch (action.type) {
    case ActionTypes.GET_TOKEN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
      }

    default:
      return state
  }
}
