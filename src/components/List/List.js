import React from 'react'
import Song from 'components/Song'
import Label from 'components/Label'
import './list.css'

export default function List({ title = '', albums = [] }) {
  return (
    <section>
      <Label>{title}</Label>
      <ul>
        {albums.map(album => (
          <Song key={album.id} album={album}></Song>
        ))}
      </ul>
    </section>
  )
}
