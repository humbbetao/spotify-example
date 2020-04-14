import React, { useState, useEffect } from 'react'
import './songItem.css'
import Label from 'components/Label'
import convertFromMsToMin from './convertFromMsToMin'
import SoundActions from 'store/reducers/sound/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

export default function SongItem(props) {
  const [audio, setAudio] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const {
    fetchSongsPending,
    songPlaying,
    // timeElapsed,
    songId,
    viewType,
    songPaused,
    volume,
    TIME,
  } = useSelector(state => ({
    fetchSongsPending: state.sound.fetchSongsPending,
    songPlaying: state.sound.songPlaying,
    // timeElapsed: state.sound.timeElapsed,
    songId: state.sound.songId,
    viewType: state.sound.viewType,
    songPaused: state.sound.songPaused,
    volume: state.sound.volume,
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    if (!audio) return
    if (audio) {
      console.log(audio)
      audio.addEventListener('timeupdate', event => {
        // some code to calculate currentTime for first time
        console.log('timeupdate')
        // setTimeElapsed(event.target.currentTime)
        // audio.currentTime = setTimeElapsed
        setTimeElapsed(audio.currentTime)
      })
    }
    return () => {
      if (audio) {
        audio.pause()
        // audio.removeEventListener('timeupdate', () => {})
      }
      setTimeElapsed(0)
      setPlaying(false)
      setAudio(null)
    }
  }, [audio])

  const stopSong = () => {
    if (audio) {
      dispatch(SoundActions.stopSong())
      setPlaying(false)

      audio.pause()
    }
  }

  const pauseSong = () => {
    if (audio) {
      dispatch(SoundActions.pauseSong())
      setPlaying(false)

      audio.pause()
    }
  }

  const resumeSong = () => {
    if (audio) {
      dispatch(SoundActions.resumeSong())
      this.setState({ playing: true })

      audio.play()
    }
  }

  const audioControl = () => {
    const { song } = props
    if (!audio) {
      dispatch(SoundActions.playSong(song.track))
      const newAudio = new Audio(song.preview_url)
      setAudio(newAudio)
      newAudio.play()
      setPlaying(true)
    } else {
      dispatch(SoundActions.stopSong())
      audio.pause()
      setTimeElapsed(0)
      setPlaying(false)
      dispatch(SoundActions.playSong(song.track))
      const newAudio = new Audio(song.preview_url)
      setAudio(newAudio)
      newAudio.play()
      setPlaying(true)
    }
  }

  const { song, id } = props
  // if (playing) {
  console.log(
    playing,
    audio,
    timeElapsed,
    song.duration_ms,
    convertFromMsToMin(song.duration_ms)
  )

  return (
    <li className="song-item" onClick={audioControl}>
      <span
        className="bar"
        style={
          playing
            ? {
                width: `${((audio || {}).currentTime / audio.duration) * 100}%`,
              }
            : {}
        }
      ></span>
      <div style={{ zIndex: 1, padding: '8px' }}>
        <Label className="song-number color">{`${id}.`} </Label>
        <Label>{song.name}</Label>
      </div>
      <div className="song-timer color">
        {playing
          ? `Ouvindo: ${convertFromMsToMin(
              (audio || {}).currentTime * 1000
            )}s de ${convertFromMsToMin(song.duration_ms)} `
          : convertFromMsToMin(song.duration_ms)}
      </div>
    </li>
  )
}
