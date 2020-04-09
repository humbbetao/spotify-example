import ActionTypes from './actionTypes'
export const INITIAL_STATE = {}

export default function orderDeal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.TEST:
      return { ...INITIAL_STATE }

    default:
      return state
  }
}
