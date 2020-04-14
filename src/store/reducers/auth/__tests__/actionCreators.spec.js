import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'
describe('Auth Action creators', () => {
  it('getToken', () => {
    const action = ActionCreators.getToken()
    expect(action.type).toEqual(ActionTypes.GET_TOKEN)
    expect(action.payload).toEqual(undefined)
  })
  it('setToken', () => {
    const token = 'token'
    const action = ActionCreators.setToken(token)
    expect(action.type).toEqual(ActionTypes.GET_TOKEN_SUCCESS)
    expect(action.payload.token).toEqual(token)
  })
  it('setError', () => {
    const error = new Error('dumb error')
    const action = ActionCreators.setError(error)
    expect(action.type).toEqual(ActionTypes.GET_TOKEN_ERROR)
    expect(action.payload.error).toEqual(error)
  })
  it('requestRefreshToken', () => {
    const action = ActionCreators.requestRefreshToken()
    expect(action.type).toEqual(ActionTypes.REQUEST_REFRESH_TOKEN)
    expect(action.payload).toEqual(undefined)
  })
  it('getRefreshToken', () => {
    const token = 'dumb token'
    const action = ActionCreators.getRefreshToken(token)
    expect(action.type).toEqual(ActionTypes.GET_REFRESH_TOKEN)
    expect(action.payload.token).toEqual(token)
  })
})
