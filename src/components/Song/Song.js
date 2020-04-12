import React from 'react'
import P from 'components/P'
import './song.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Song({ album = { image: [] } }) {
  const history = useHistory()
  const artist = album.artists[album.artists.length - 1].name

  if (!album) return
  const handleOnClickOnSong = () =>
    history.push(`/albums/${artist}/${album.id}`)
  return (
    <li className="album-item" onClick={handleOnClickOnSong}>
      <picture>
        {album.images.map(image => (
          <source
            key={image.url}
            media={`(min-width: ${image.width * 3}px)`}
            srcSet={image.url}
            alt={album.name}
          />
        ))}
        <img
          className="image-song"
          src={album.images[album.images.length - 1].url}
          alt={album.name}
        />
      </picture>

      <P>{artist}</P>
      <P>{album.name}</P>
    </li>
  )
}
