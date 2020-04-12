import React, { useEffect } from 'react'
import './songList.css'
import SongItem from 'components/SongItem'

export default function SongList({ songs = [] }) {
  console.log(songs)
  return (
    <ol className="song-list">
      {songs.map((song, id) => (
        <SongItem key={id} song={song} id={id + 1}></SongItem>
      ))}
    </ol>
  )
}
