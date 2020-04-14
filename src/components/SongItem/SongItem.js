import React, { useState, useEffect } from 'react'
import './songItem.css'
import Label from 'components/Label'
import convertFromMsToMin from './convertFromMsToMin'
import SoundActions from 'store/reducers/sound/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

export default function SongItem(props) {
  let audio = null
  const [playing, setPlaying] = useState(false)
  const {
    fetchSongsPending,
    songPlaying,
    timeElapsed,
    songId,
    viewType,
    songPaused,
    volume,
  } = useSelector(state => ({
    fetchSongsPending: state.sound.fetchSongsPending,
    songPlaying: state.sound.songPlaying,
    timeElapsed: state.sound.timeElapsed,
    songId: state.sound.songId,
    viewType: state.sound.viewType,
    songPaused: state.sound.songPaused,
    volume: state.sound.volume,
  }))
  const dispatch = useDispatch()
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause()
      }
      audio = null
    }
  }, [])

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
      audio = new Audio(song.preview_url)
      audio.play()
      setPlaying(true)
    } else {
      dispatch(SoundActions.stopSong())
      audio.pause()
      setPlaying(false)
      dispatch(SoundActions.playSong(song.track))
      audio = new Audio(song.preview_url)
      audio.play()
      setPlaying(true)
    }
  }

  const { song, id } = props
  return (
    <li className="song-item" onClick={audioControl}>
      <span
        className="bar"
        style={
          playing
            ? { width: `${(audio || {}).currentTime / song.duration_ms}px` }
            : {}
        }
      ></span>
      <div style={{ zIndex: 1, padding: '8px' }}>
        <Label className="song-number color">{`${id}.`} </Label>
        <Label>{song.name}</Label>
      </div>
      <div className="song-timer color">
        {playing
          ? `${convertFromMsToMin(
              (audio || {}).currentTime * 1000
            )}:${convertFromMsToMin(song.duration_ms)}`
          : convertFromMsToMin(song.duration_ms)}
      </div>
    </li>
  )
}
