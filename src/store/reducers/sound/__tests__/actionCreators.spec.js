import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'

describe('Songs Action creators', () => {
  it('playSong', () => {
    const song = { id: 10 }
    const action = ActionCreators.playSong(song)
    expect(action.type).toEqual(ActionTypes.PLAY_SONG)
    expect(action.payload.song).toEqual(song)
  })
  it('stopSong', () => {
    const action = ActionCreators.stopSong()
    expect(action.type).toEqual(ActionTypes.STOP_SONG)
    expect(action.payload).toEqual(undefined)
  })
  it('pauseSong', () => {
    const action = ActionCreators.pauseSong()
    expect(action.type).toEqual(ActionTypes.PAUSE_SONG)
    expect(action.payload).toEqual(undefined)
  })
  it('resumeSong', () => {
    const action = ActionCreators.resumeSong()
    expect(action.type).toEqual(ActionTypes.RESUME_SONG)
    expect(action.payload).toEqual(undefined)
  })
  it('increaseSongTime', () => {
    const time = 10
    const action = ActionCreators.increaseSongTime(time)
    expect(action.type).toEqual(ActionTypes.INCREASE_SONG_TIME)
    expect(action.payload.time).toEqual(time)
  })
})
