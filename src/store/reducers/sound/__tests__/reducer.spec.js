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
    const song = { id: 10 }
    const action = ActionCreators.playSong(song)
    const state = Reducer(INITIAL_STATE, action)
    expect(state.songId).toEqual(song.id)
    expect(state.fetchSongsPending).toEqual(INITIAL_STATE.fetchSongsPending)
    expect(state.songPlaying).toEqual(true)
    expect(state.timeElapsed).toEqual(INITIAL_STATE.timeElapsed)
    expect(state.songPaused).toEqual(false)
    expect(state.volume).toEqual(INITIAL_STATE.volume)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const song = { id: 10 }

    const actionPlaySong = ActionCreators.playSong(song)

    const actionPauseSong = ActionCreators.stopSong()
    const action = { type: 'dummy_action' }
    let state = Reducer(INITIAL_STATE, action)
    state = Reducer(INITIAL_STATE, actionPlaySong)
    expect(state.songId).toEqual(song.id)

    state = Reducer(INITIAL_STATE, actionPauseSong)

    expect(state.fetchSongsPending).toEqual(INITIAL_STATE.fetchSongsPending)
    expect(state.songPlaying).toEqual(INITIAL_STATE.songPlaying)
    expect(state.timeElapsed).toEqual(INITIAL_STATE.timeElapsed)
    expect(state.songPaused).toEqual(INITIAL_STATE.songPaused)
    expect(state.volume).toEqual(INITIAL_STATE.volume)
  })

  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const song = { id: 10 }
    const actionPlaySong = ActionCreators.playSong(song)
    const actionPauseSong = ActionCreators.stopSong()
    const actionResumeSong = ActionCreators.resumeSong()
    let state = Reducer(INITIAL_STATE, actionPlaySong)
    state = Reducer(INITIAL_STATE, actionPauseSong)
    state = Reducer(INITIAL_STATE, actionResumeSong)
    expect(state.songId).toEqual(song.id)

    expect(state.fetchSongsPending).toEqual(INITIAL_STATE.fetchSongsPending)
    expect(state.songPlaying).toEqual(INITIAL_STATE.songPlaying)
    expect(state.timeElapsed).toEqual(INITIAL_STATE.timeElapsed)
    expect(state.songPaused).toEqual(INITIAL_STATE.songPaused)
    expect(state.volume).toEqual(INITIAL_STATE.volume)
  })
  it('Initial State is returned as long as occur an default action or initial action ', () => {
    const songtime = 10
    const song = { id: 10 }

    const actionPlaySong = ActionCreators.playSong(song)
    const action = ActionCreators.increaseSongTime(songtime)

    let state = Reducer(INITIAL_STATE, action)
    state = Reducer(INITIAL_STATE, actionPlaySong)
    expect(state.songId).toEqual(song.id)
    expect(state.timeElapsed).toEqual(songtime + state.timeElapsed)
  })
})