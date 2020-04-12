import React from 'react'
import './songItem.css'
import Label from 'components/Label'
import convertFromMsToMin from './convertFromMsToMin'
export default function SongItem({ song, id }) {
  console.log(song)
  return (
    <li className="song-item">
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
