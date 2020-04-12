import React from 'react'
import Song from 'components/Song'
import Label from 'components/Label'
import './list.css'
import { useSelector } from 'react-redux'
import mock from './mock'
export default function List({ title }) {
  const albums = useSelector(state => state.album.albums)
  // const albums = mock.albums.items
  return (
    <section>
      <Label>{title}</Label>
      <ul>
        {albums.map((album, id) => (
          <Song key={id} album={album}></Song>
        ))}
      </ul>
    </section>
  )
}
