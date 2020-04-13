import React from 'react'
import AlbumCover from 'components/AlbumCover'
import Label from 'components/Label'
import './list.css'

export default function List({ title = '', albums = [] }) {
  return (
    <section>
      <Label className="title-songs-list">{title}</Label>
      <ul className="content-songs-list">
        {albums.map(album => (
          <AlbumCover key={album.id} album={album}></AlbumCover>
        ))}
      </ul>
    </section>
  )
}
