import ActionTypes from '../actionTypes'
import ActionCreators from '../actionCreators'
import Reducer, { INITIAL_STATE } from '../reducer'

describe('Songs Reducer', () => {
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const action = { type: 'dummy_action' }
    const state = Reducer(INITIAL_STATE, action)
    expect(state).toEqual(INITIAL_STATE)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const song = 10
    const action = ActionCreators.playSong(song)
    const state = Reducer(INITIAL_STATE, action)
    expect(state.songId).toEqual(song)
    expect(state.fetchSongsPending).toEqual(INITIAL_STATE.fetchSongsPending)
    expect(state.songPlaying).toEqual(true)
    expect(state.timeElapsed).toEqual(INITIAL_STATE.timeElapsed)
    expect(state.songPaused).toEqual(false)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const song = 10

    const actionPlaySong = ActionCreators.playSong(song)

    const actionPauseSong = ActionCreators.stopSong()
    const action = { type: 'dummy_action' }
    let state = Reducer(INITIAL_STATE, action)
    state = Reducer(INITIAL_STATE, actionPlaySong)
    expect(state.songId).toEqual(song)

    state = Reducer(INITIAL_STATE, actionPauseSong)

    expect(state.fetchSongsPending).toEqual(INITIAL_STATE.fetchSongsPending)
    expect(state.songPlaying).toEqual(INITIAL_STATE.songPlaying)
    expect(state.timeElapsed).toEqual(INITIAL_STATE.timeElapsed)
    expect(state.songPaused).toEqual(INITIAL_STATE.songPaused)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const song = 10
    const actionPlaySong = ActionCreators.playSong(song)
    const actionPauseSong = ActionCreators.stopSong()
    const actionResumeSong = ActionCreators.resumeSong()
    let state = Reducer(INITIAL_STATE, actionPlaySong)
    expect(state.songId).toEqual(song)
    state = Reducer(state, actionPauseSong)
    state = Reducer(state, actionResumeSong)
    expect(state.songId).toEqual(song)

    expect(state.fetchSongsPending).toEqual(INITIAL_STATE.fetchSongsPending)
    expect(state.songPlaying).toEqual(INITIAL_STATE.songPlaying)
    expect(state.timeElapsed).toEqual(INITIAL_STATE.timeElapsed)
    expect(state.songPaused).toEqual(false)
  })
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const songtime = 10
    const song = 10
    const DumbAction = { type: 'dummy_action' }
    let state = Reducer(INITIAL_STATE, DumbAction)

    const actionPlaySong = ActionCreators.playSong(song)
    state = Reducer(state, actionPlaySong)

    const timeElapsedBefore = state.timeElapsed

    const action = ActionCreators.increaseSongTime(songtime)
    state = Reducer(state, action)

    expect(state.songId).toEqual(song)
    const increasedTime = songtime + timeElapsedBefore
    expect(state.timeElapsed).toEqual(increasedTime)
  })
})
