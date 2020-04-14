import ActionCreators from '../actionCreators'
import Reducer, { INITIAL_STATE } from '../reducer'

describe('Auth Reducer', () => {
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const action = { type: 'dummy_action' }
    const state = Reducer(INITIAL_STATE, action)
    expect(state).toEqual(INITIAL_STATE)
    expect(state.isLogged).toEqual(false)
    expect(state.isLogged).toBeFalsy()
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const token = 'dumb token'
    const action = ActionCreators.setToken(token)
    const state = Reducer(INITIAL_STATE, action)
    expect(state.isLogged).toEqual(true)
    expect(state.isLogged).toBeTruthy()
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    let state
    const error = new Error()
    const action = ActionCreators.setError(error)
    state = Reducer(INITIAL_STATE, action)
    expect(state.isLogged).toEqual(false)
    expect(state.isLogged).toBeFalsy()
  })
})
