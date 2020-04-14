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
      audio.addEventListener('timeupdate', event => {
        setTimeElapsed(audio.currentTime)
        if ((audio || {}).currentTime >= song.duration_ms) {
          audio.pause()
          setTimeElapsed(0)
          setPlaying(false)
          setAudio(null)
          dispatch(SoundActions.stopSong())
        }
      })
    }
    if (songId === audio.url) {
      audio.pause()
      setTimeElapsed(0)
      setPlaying(false)
      setAudio(null)
      dispatch(SoundActions.stopSong())
    }

    return () => {
      if (audio) {
        audio.pause()
      }
      setTimeElapsed(0)
      setPlaying(false)
      setAudio(null)
    }
  }, [audio, songId])

  const stopSong = () => {
    if (audio) {
      dispatch(SoundActions.stopSong())
      setPlaying(false)

      audio.pause()
    }
  }

  const audioControl = () => {
    if (songPlaying) {
      stopSong()
      setAudio(null)
    }
    const { song } = props

    if (!audio) {
      dispatch(SoundActions.playSong(song.preview_url))
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
