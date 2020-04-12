import React from 'react'
import './songItem.css'
import Label from 'components/Label'
import convertFromMsToMin from './convertFromMsToMin'
export default class SongItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { playing: false }
    this.audio = null
  }

  componentWillUnmount() {
    if (this.audio) {
      this.audio.pause()
    }
    this.audio = null
  }

  stopSong = () => {
    if (this.audio) {
      // this.props.stopSong()
      this.setState({ playing: false })

      this.audio.pause()
    }
  }

  pauseSong = () => {
    if (this.audio) {
      // this.props.pauseSong()
      this.setState({ playing: false })

      this.audio.pause()
    }
  }

  resumeSong = () => {
    if (this.audio) {
      // this.props.resumeSong()
      this.setState({ playing: true })

      this.audio.play()
    }
  }

  audioControl = () => {
    const { song } = this.props
    if (!this.audio) {
      // playSong(song.track)
      this.audio = new Audio(song.preview_url)
      this.audio.play()
    } else {
      // stopSong()
      this.audio.pause()
      // playSong(song.track)
      this.audio = new Audio(song.preview_url)
      this.audio.play()
    }
  }

  render() {
    const { song, id } = this.props
    return (
      <li className="song-item" onClick={this.audioControl}>
        <div style={{ width: '80%' }}>
          <Label className="song-number color">{`${id}.`} </Label>
          <Label>{song.name}</Label>
        </div>

        <Label className="color song-timer">
          {convertFromMsToMin(song.duration_ms)}
        </Label>
      </li>
    )
  }
}
